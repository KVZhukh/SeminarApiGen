'use client';

import { useClientSearchParams } from './useClientSearchParams';

export const useActivePage = (key = 'page') => {
    const page = useClientSearchParams(key);

    return +(page || 1);
};
