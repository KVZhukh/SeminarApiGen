import { FetchError, type IConfig } from './types';

export const API_FRONT_URL = '/api/api-front/';

/**
 * Данные для ApiClient
 */
export interface IAPIClientData {
    /** Серверный токен (на клиенте отсутствует, смотри в middleware.ts */
    accessToken?: string;
}

/**
 * Статический экземпляр апи клиента (только на клиенте)
 */
let instance: any;

type OnTimeMeasureHandler = (
    endpoint: string,
    headers: Record<string, unknown>,
    requestData: Record<string, unknown>,
    deltaTimeMs: number
) => void;

const preparedParams = (params: Record<string, any>) => {
    const newParams = new URLSearchParams();

    Object.keys(params).forEach(p => {
        if (Array.isArray(params[p])) {
            params[p].forEach((val: any) => newParams.append(`${p}[]`, val));
        } else {
            newParams.append(p, params[p]);
        }
    });

    return newParams;
};

export class APIClient {
    private onTimeMeasureHandler?: OnTimeMeasureHandler;

    setOnTimeMeasureHandler(handler: OnTimeMeasureHandler) {
        this.onTimeMeasureHandler = handler;
    }

    /**
     * Инициализация
     */
    static initInstance(data: IAPIClientData) {
        if (!instance) instance = new APIClient(data);
    }

    /**
     * Получить синглтон апи клиента (только на клиенте)
     */
    static getInstance() {
        if (typeof window === 'undefined' || !instance)
            throw new Error('APIClient instance is not initialized or used on server side');
        return instance as APIClient;
    }

    static async returnJSON<T = unknown>(response: Response) {
        const json: IResponseData = await response.json();

        if (!response.ok) {
            let errorMessage = 'Request failed';
            let errorCode = '';

            /** we must throw errors to allow @tanstack/react-query catch them in hooks */
            if (json.errors && json.errors.length > 0) {
                errorMessage = Array.isArray(json.errors) ? json.errors.map(e => e.message).join(` \n`) : json.errors;
                errorCode = Array.isArray(json.errors) ? [...new Set(json.errors.map(e => e.code))].join(` & `) : '500';

                // NOTE: обработка сообщения для promocode
                if ('message' in json) {
                    errorMessage = json.message as string;
                }
            }

            if (json?.Msg) errorMessage = json.Msg;
            else if (json?.message && !json.errors) errorMessage = json.message;

            if (json.code) errorCode = json.code;
            if (json.error_code) errorCode = json.error_code;

            throw new FetchError(response.url, response.status, errorMessage, errorCode);
        }

        return json as T;
    }

    static async returnBlob(response: Response) {
        return response.blob();
    }

    data: Partial<IAPIClientData> | undefined;

    constructor(data: IAPIClientData) {
        this.data = data;
    }

    protected async unauthorizedClient(
        endpoint: string,
        {
            data,
            timeout = 30000,
            headers: customHeaders = {},
            params = {},
            abortController = new AbortController(),
            ...customConfig
        }: IConfig = {}
    ) {
        const parsedParams = Object.entries(params).reduce((acc, [key, value]) => {
            if (typeof value !== 'undefined') return { ...acc, [key]: value };
            return acc;
        }, {});
        const endpoinWithParams = `${endpoint}${parsedParams && Object.keys(parsedParams).length ? `?${preparedParams(parsedParams)}` : ''}`;

        const timer = setTimeout(() => abortController.abort(), timeout);

        const headers = {
            ...(data && !(data instanceof FormData) && { 'Content-Type': 'application/json' }),
            ...customHeaders,
        };

        const config = {
            method: data ? 'POST' : 'GET',
            // eslint-disable-next-line no-nested-ternary
            body: data ? (data instanceof FormData ? data : JSON.stringify(data)) : undefined,
            headers,
            ...customConfig,
            signal: abortController.signal,
        };

        const time = performance.now();

        const response = await fetch(`${endpoinWithParams}`, config);
        clearTimeout(timer);

        const timeDeltaMs = performance.now() - time;
        this.onTimeMeasureHandler?.(
            endpoinWithParams,
            headers,
            data instanceof FormData ? { formData: '' } : data,
            timeDeltaMs
        );

        return response;
    }

    public async request<T = unknown, TData = unknown>(endpoint: string, config?: IConfig<TData>): Promise<T> {
        const resp = await this.unauthorizedClient(endpoint, {
            ...config,
        });

        // CMD иногда падает и отдает текст, а не json
        if (resp.headers.get('content-type')?.includes('text/html') && !resp.ok) {
            const text = await resp.text();
            const errorMessage = text || 'Request failed';
            throw new FetchError(resp.url, resp.status, errorMessage, '');
        }

        if (resp.headers.get('content-type')?.includes('application/json')) return APIClient.returnJSON<T>(resp);

        if (resp.headers.get('content-type')?.includes('image')) {
            return (await APIClient.returnBlob(resp)) as T;
        }

        const temp = JSON.parse(JSON.stringify(resp)) as T;

        return temp;
    }

    public async get<T, TParams = unknown>(endpoint: string, config?: Omit<IConfig<never, TParams>, 'data'>) {
        return this.request<T>(endpoint, { ...config, method: 'GET' });
    }

    public async post<TData, T, TParams = unknown>(endpoint: string, config?: IConfig<TData, TParams>) {
        return this.request<T, TData>(endpoint, { ...config, method: 'POST' });
    }

    public async patch<TData, T, TParams = unknown>(endpoint: string, config?: IConfig<TData, TParams>) {
        return this.request<T, TData>(endpoint, { ...config, method: 'PATCH' });
    }

    public async put<TData, T, TParams = unknown>(endpoint: string, config?: IConfig<TData, TParams>) {
        return this.request<T, TData>(endpoint, { ...config, method: 'PUT' });
    }

    public async delete<TData, T, TParams = unknown>(endpoint: string, config?: IConfig<TData, TParams>) {
        return this.request<T, TData>(endpoint, { ...config, method: 'DELETE' });
    }
}

export { FetchError };
