import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay = 300) => {
    const [loading, setLoading] = useState(false);
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        setLoading(true);
        const handler = setTimeout(() => {
            setLoading(false);
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return { value: debouncedValue, loading };
};

export default useDebounce;
