import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

/*

Usage:

const [searchTerm, setSearchTerm] = useState('');
const [results, setResults] = useState([]);

// Debounce search term so that it only gives us latest value ...
// ... if searchTerm has not been updated within last 500ms.

const debouncedSearchTerm = useDebounce(searchTerm, 500);

// Effect for API call
useEffect(
    () => {
        if (debouncedSearchTerm) {
            searchCharacters(debouncedSearchTerm).then((results) => {
                setResults(results);
            });
        } else setResults([]);
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
);

*/