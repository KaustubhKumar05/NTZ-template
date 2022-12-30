import { useEffect, useState } from 'react';

// Prefix to avoid name clashes in localStorage
const PREFIX = 'custom-hook';

export const useLocalStorage = (name, initialValue) => {
    const key = `${PREFIX}-${name}`;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);

        // If the value is set using a function call
        if (typeof initialValue === 'function') return initialValue();
        else return initialValue;
    });

    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
    return [value, setValue];
};
