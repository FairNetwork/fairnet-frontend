import './header.scss';
import logo from '../../../assets/FairNet_Logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img alt="Logo" src={logo} />
            </div>
            <div className="header__items"></div>
            <div className="header__menu"></div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
