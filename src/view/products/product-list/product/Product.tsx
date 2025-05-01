import { FC } from 'react';
import './product.scss';
import Button, { ButtonType } from '../../../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../../../hooks/product';

interface ProductProps {
    id: string;
}

const Product: FC<ProductProps> = ({ id }) => {
    const navigate = useNavigate();

    const product = useProduct(id);

    if (!product) {
        return null;
    }

    const { name, image, route, description } = product;

    const handleButtonClick = () => {
        navigate(route);
    };

    return (
        <div className="product">
            <img src={image} alt="Produkt" />

            <div className="product__content">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="product__content__button">
                    <Button onClick={handleButtonClick} type={ButtonType.Outline}>
                        Mehr erfahren
                    </Button>
                </div>
            </div>
        </div>
    );
};

Product.displayName = 'ProductCard';

export default Product;
