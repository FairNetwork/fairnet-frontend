import './homeSection.scss';
import { CSSProperties, FC, ReactNode } from 'react';
import Button, { ButtonType } from '../../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';

interface HomeSectionProps {
    headline: string;
    text: ReactNode;
    style?: CSSProperties;
    route?: string;
    buttonText?: string;
}

const HomeSection: FC<HomeSectionProps> = ({ headline, text, style, route, buttonText }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (typeof route === 'string') {
            navigate(route);
        }
    };

    return (
        <div className="home-Section" style={style}>
            <div className="home-section__content">
                <h1>{headline}</h1>
                {text}
                {typeof route === 'string' && typeof buttonText === 'string' && (
                    <div className="home-section__content__button">
                        <Button
                            onClick={handleClick}
                            type={ButtonType.Outline}
                            style={{ fontSize: '1.3rem' }}>
                            {buttonText}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

HomeSection.displayName = 'HomeSection';

export default HomeSection;
