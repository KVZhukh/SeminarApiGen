import { APIClient } from '@api/index';

interface IOptions {
    apiClient?: APIClient;
}

export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

export const customInstance = async <T>(
    {
        url,
        method,
        data,
    }: {
        url: string;
        method: keyof typeof HttpMethods;
        data?: unknown;
        responseType?: string;
    },
    options?: IOptions
): Promise<T> => {
    const targetUrl = `${url}`;

    const apiClient = options?.apiClient || APIClient.getInstance();

    const response = await apiClient.get<T>(targetUrl);

    return response;
};

export default customInstance;

//  // In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
//  export type ErrorType<Error> = AxiosError<Error>;
//  // In case you want to wrap the body type (optional)
//  // (if the custom instance is processing data before sending it, like changing the case for example)
//  export type BodyType<BodyData> = CamelCase<BodyType>;
