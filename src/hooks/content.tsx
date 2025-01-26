import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Home from '../view/home/Home';
import NoContent from '../view/no-content/NoContent';
import Tools from '../view/tools/Tools';
import Utility from '../view/utility/Utility';

export const useContent = () => {
    const location = useLocation();

    return useMemo(() => {
        const path = location.pathname;

        if (path === '/') return <Home />;

        if (path === '/tools') return <Tools />;

        if (path.startsWith('/utility')) return <Utility />;

        return <NoContent />;
    }, [location.pathname]);
};
