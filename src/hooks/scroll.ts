import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const element = document.getElementById('scroll-bar') || window;

        element.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
};
