import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Home from '../view/home/Home';
import NoContent from '../view/no-content/NoContent';
import Utility from '../view/utility/Utility';
import Support from '../view/support/Support';

export const useContent = () => {
    const location = useLocation();

    return useMemo(() => {
        const path = location.pathname;

        if (path === '/') return <Home />;

        if (path === '/support') return <Support />;

        if (path.startsWith('/utility')) return <Utility />;

        return <NoContent />;
    }, [location.pathname]);
};
