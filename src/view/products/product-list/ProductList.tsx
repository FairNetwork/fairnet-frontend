import './productList.scss';
import { useProducts } from '../../../hooks/product';
import { useMemo } from 'react';
import Product from './product/Product';

const ProductList = () => {
    const products = useProducts();

    const content = useMemo(() => {
        return products.map((id) => <Product key={id} id={id} />);
    }, [products]);

    return <div className="product-list">{content}</div>;
};

ProductList.displayName = 'ProductList';

export default ProductList;
