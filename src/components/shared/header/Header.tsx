import './header.scss';
import logo from '../../../assets/FairNet_Logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className="header__logo">
                <img alt="Logo" src={logo} onClick={handleImageClick} />
            </div>
            <div className="header__items"></div>
            <div className="header__menu"></div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
