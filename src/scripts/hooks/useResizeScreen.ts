import { useState } from 'react';

import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';

import { type Breakpoint } from '@customTypes/gds';

import { breakpoints } from '@scripts/gds/media';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/*
 * Хук для отслеживания изменения размера окна
 */

export const useResizeScreen = (breakpoint: Breakpoint = 'sm') => {
    const [isAdaptive, setIsAdaptive] = useState(false);

    useIsomorphicLayoutEffect(() => {
        if (!window) return;
        const handleResize = () => {
            const { innerWidth } = window;

            setIsAdaptive(innerWidth < breakpoints[breakpoint]);
        };

        const ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;
        const observer = new ResizeObserver(handleResize);

        handleResize();
        observer.observe(document.body);

        return () => {
            observer.disconnect();
        };
    }, [breakpoint]);

    return isAdaptive;
};
