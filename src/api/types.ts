import { type ChannelTypeEnum, type LoymaxChannelEnum, type SalesChannelEnum } from './enums';

/**
 * Параметры запроса с каналом
 */
export interface IChannelRequestParamsBase<TChannelType> {
    /** Канал */
    channel: TChannelType;
}

/**
 * Параметры запроса с типом канала
 */
export interface IChannelTypeRequestParams extends IChannelRequestParamsBase<ChannelTypeEnum.WEBSITE> {}

/**
 * Параметры запроса с каналом продаж
 */
export interface ISalesChannelRequestParams
    extends IChannelRequestParamsBase<SalesChannelEnum.ONLINE | SalesChannelEnum.OFFLINE> {}

/**
 * Параметры запроса с каналом для Loymax
 */
export interface ILoymaxChannelRequestParams
    extends IChannelRequestParamsBase<LoymaxChannelEnum.KUPER | LoymaxChannelEnum.SITE> {}

/**
 * Настройки запроса ApiClient
 */
export interface IConfig<TData = any, TParams = any> {
    token?: string;
    data?: TData;
    headers?: Record<string, string>;
    params?: TParams;
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
    timeout?: number;
    abortController?: AbortController;
}

/**
 * Класс ошибки запроса
 */
export class FetchError extends Error {
    /** Дата ошибки */
    date: string;

    /** Время ошибки */
    time: string;

    constructor(
        /** URL ошибки */
        public url: string,
        /** Статус */
        public status: number,
        /** Текст */
        public message: string,
        /** Код */
        public code: string
    ) {
        super(message);

        this.status = status;
        this.code = code;
        this.url = url;

        const date = new Date();
        this.date = date.toLocaleDateString('ru-RU');
        this.time = date.toLocaleTimeString('ru-RU');
    }
}
