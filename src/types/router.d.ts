/**
 * Базовый интерфейс параметров страницы
 */
declare interface IPageParams extends IMap<string | string[] | undefined> {}

/**
 * Базовый интерфейс параметров динамических страниц
 */
declare interface IPageSlugParams extends IPageParams {
    /** Сегменты урла каталога (коды категорий и фильтров) */
    slug: string[];
}

/**
 * Базовый интерфейс параметров страницы писка
 */
declare interface IPagePaginationSearchParams extends IPageParams {
    /** Выбранная страница */
    page?: string;
}

/**
 * Базовый интерфейс параметров страницы писка
 */
declare interface IPageFilterSearchParams extends IPageParams {
    /** Добавочные фильтры, которые не вошли в сегменты урла (base64 string) */
    filters?: string;

    /** Сортировка */
    sort?: string;
}

/**
 * Базовый интерфейс параметров страницы писка
 */
declare interface IPageListSearchParams extends IPageFilterSearchParams, IPagePaginationSearchParams {}

/**
 * Базовый интерфейс страниц роутинга
 */
declare interface IPageProps<
    TParams extends IPageParams = IPageParams,
    TSearchParams extends IPageParams = IPageParams,
> {
    /** Параметры страницы */
    params: TParams;

    /** Query параметры страницы */
    searchParams: TSearchParams;
}
