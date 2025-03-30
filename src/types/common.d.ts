/**
 * Хелпер для опциональных свойств
 */
declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

declare type ExcludeUndefined<T> = T extends undefined ? never : T;

declare type Unpacked<T> = T extends Promise<infer U> ? U : T;

/**
 * Интерфейс маппинга
 */
declare interface IMap<T = unknown> extends Record<string | number, T> {}

/**
 * Интерфейс данных запроса для неавторизованного пользователя
 */
declare interface IDeviceIdRequestData {
    /**
     * Идентификатор неавторизованного пользователя
     */
    deviceId?: string;
}

/**
 * Интерфейс ошибки ответа запроса
 */
declare interface IResponseError {
    code: string;
    message: string;
    meta?: {
        description: string;
    };
}

/**
 * Интерфейс метаданных пагинации
 */
declare interface IPaginationMeta {
    type: 'offset';
    offset: number;
    limit: number;
    total: number;
}

/**
 * Интерфейс метаданных пагинации
 */
declare interface IPaginationCursorMeta {
    type: 'cursor';
    cursor: string;
    total: number;
}

/**
 * Интерфейс метаданных пагинации
 */
declare interface IPaginationRequestMeta extends Omit<IPaginationMeta, 'total'> {}

/**
 * Интерфейс данных ответа запроса
 */
declare interface IResponseData<TData = unknown, TMeta = {}> {
    data?: TData;
    meta?: TMeta;
    errors?: IResponseError[];

    /** Ошибка из CMD */
    Msg?: string;
    message?: string;
    code?: string;

    error_code?: string;
}

/**
 * Интерфейс фильтра запроса
 */
declare interface IFilterRequestData<TFilter, TSort = string[], TInclude = string[]> extends IMap {
    query?: string;
    filters?: TFilter;
    sort?: TSort;
    include?: TInclude;
}

/**
 * Интерфейс фильтра запроса списка с пагинацией
 */
declare interface IListRequestData<TFilter, TSort = string[], TInclude = string[], TPagination = IPaginationRequestMeta>
    extends IFilterRequestData<TFilter, TSort, TInclude> {
    pagination: TPagination;
}

/**
 * Интерфейс метаданных ответа запроса списка
 */
declare interface IListResponseMeta {
    pagination: IPaginationMeta;
}

/**
 * Интерфейс данных ответа запроса списка
 */
declare interface IListResponseData<TItem, TMeta extends IListResponseMeta = IListResponseMeta>
    extends IResponseData<TItem[], TMeta> {}

declare interface ICommonComponentProps {
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
}
