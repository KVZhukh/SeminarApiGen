import { type Dispatch, type SetStateAction, useRef, useState } from 'react';

import deepEqual from 'react-fast-compare';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useIntrnalValue = <T>(value: T) => {
    const [internalValue, setInternalValue] = useState<T>(value);

    const internalValueRef = useRef(internalValue);
    internalValueRef.current = internalValue;

    useIsomorphicLayoutEffect(() => {
        if (!deepEqual(internalValueRef.current, value)) setInternalValue(value);
    }, [value]);

    return [internalValue, setInternalValue] as [T, Dispatch<SetStateAction<T>>];
};
