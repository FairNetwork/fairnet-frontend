import './productHelp.scss';
import Button, { ButtonType } from '../../../components/shared/button/Button';

const ProductHelp = () => {
    const handleButtonClick = () => {
        window.location.href = 'mailto:info@fairnet.site';
    };

    return (
        <div className="product-help">
            <h2>Unsicher, was am besten zu Dir passt?</h2>
            <p>
                Kein Problem – wir nehmen Dich an die Hand. In einem persönlichen Gespräch finden
                wir gemeinsam heraus, <b>was Du wirklich brauchst</b> – ganz ohne Fachchinesisch.
                <br />
                <br />
                Du sagst uns, wohin Du willst. Wir zeigen Dir den einfachsten Weg dorthin.
            </p>
            <div className="product-help__button">
                <Button onClick={handleButtonClick} type={ButtonType.Outline}>
                    Kontakt aufnehmen
                </Button>
            </div>
        </div>
    );
};

ProductHelp.displayName = 'ProductHelp';

export default ProductHelp;
