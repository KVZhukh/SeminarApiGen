/* eslint-disable no-restricted-globals */
import { useCallback, useEffect, useState } from 'react';

import { type HistoryStateEventParamsType } from '@lib/shallowRoute';

import { useMount } from './useMount';
import { usePrevious } from './usePrevious';

/**
 * Метод обновления параметра через History Api в обход App Router
 */
export const updateClientSearchParam = <T extends string>(paramName: string, newValue: T, replace = false) => {
    const { pathname } = window.location;
    // Update the URL search parameter with the new value
    const innerSearcHParams = new URLSearchParams(window.location.search);
    if (newValue) {
        innerSearcHParams.set(paramName, newValue);
    } else {
        innerSearcHParams.delete(paramName);
    }
    const newUrl = innerSearcHParams.toString().length ? `${pathname}?${innerSearcHParams.toString()}` : pathname;

    // Replace the current URL without adding to the browser history.
    window.history[replace ? 'replaceState' : 'pushState'](
        { ...window.history.state, as: newUrl.toString(), url: newUrl.toString() },
        '',
        newUrl
    );
};

/**
 * Хук для работы с параметрами через History Api в обход App Router
 */
export const useClientSearchParams = (
    paramName: string,
    initialValue: string = '',
    updateOnInitialChange = false
): [string, (newValue: string) => void] => {
    const [state, setState] = useState(initialValue);

    const prevInitial = usePrevious(initialValue);

    useEffect(() => {
        if (updateOnInitialChange && prevInitial !== initialValue) setState(initialValue);
    }, [initialValue, prevInitial, updateOnInitialChange]);

    useMount(() => {
        if (!initialValue) {
            // Если дефолтного значения нет, пытаемся взять его из урла
            const searchParams = new URLSearchParams(window.location.search);
            const initialQueryParam = searchParams.get(paramName) || '';

            setState(initialQueryParam);
        }

        // Обработчик изменения роута через History Api
        const onHistoryStateChanged = (e: Event) => {
            if (e.type === 'replaceState' || e.type === 'pushState') {
                const event = e as CustomEvent<HistoryStateEventParamsType>;
                const argUrl = event.detail[2];
                if (!argUrl) return;

                const url = new URL(argUrl, window.location.origin);
                const searchParam = url.searchParams.get(paramName) ?? initialValue;

                setState(searchParam);
            }
        };

        // подписка на события смены роута через History Api
        window.addEventListener('replaceState', onHistoryStateChanged);
        window.addEventListener('pushState', onHistoryStateChanged);

        return () => {
            // отписка
            window.removeEventListener('replaceState', onHistoryStateChanged);
            window.removeEventListener('pushState', onHistoryStateChanged);
        };
    });

    /**
     * Метод обновления параметра урла через History Api в обход App Router
     */
    const updateState = useCallback(
        (newValue: string, replace = false) => {
            setState(newValue);
            updateClientSearchParam(paramName, newValue, replace);
        },
        [paramName]
    );

    return [state, updateState];
};
