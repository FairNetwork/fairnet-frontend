import './header.scss';
import logo from '../../../assets/FairNet_Logo.png';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useHeader } from '../../../hooks/header';
import BurgerMenu from '../burger-menu/BurgerMenu';

const Header = () => {
    const navigate = useNavigate();

    const { shouldShowMenu, items } = useHeader();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleImageClick = () => {
        navigate('/');
    };

    const headerItems = useMemo(() => {
        return items.map(({ name, route }) => (
            <div className="header__items__item" key={route} onClick={() => navigate(route)}>
                {name}
            </div>
        ));
    }, []);

    return (
        <div className="header">
            <div className="header__logo">
                <img alt="Logo" src={logo} onClick={handleImageClick} />
            </div>
            <div className="header__items">{headerItems}</div>
            <div className="header__menu">
                {shouldShowMenu && (
                    <BurgerMenu
                        isOpen={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    />
                )}
            </div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
