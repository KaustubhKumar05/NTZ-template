import { useEffect } from 'react';

const useOnClickOutside = (ref, func) => {
    useEffect(() => {
        const handler = (e) => {
            if (ref?.current && !ref.current.contains(e.target)) func();
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    });
};

export default useOnClickOutside;
