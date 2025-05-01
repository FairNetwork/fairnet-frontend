import './productHelp.scss';
import Button, { ButtonType } from '../../../components/shared/button/Button';

const ProductHelp = () => {
    const handleButtonClick = () => {
        window.location.href = 'mailto:info@fairnet.site';
    };

    return (
        <div className="product-help">
            <h2>Nicht sicher, was Du brauchst?</h2>
            <p>
                Wir beraten Dich gerne persönlich und finden gemeinsam die perfekte Lösung für Dein
                Projekt.
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
