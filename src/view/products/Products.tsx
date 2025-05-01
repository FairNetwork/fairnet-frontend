import './products.scss';
import ProductList from './product-list/ProductList';
import ProductHelp from './product-help/ProductHelp';

const Products = () => {
    return (
        <div className="products">
            <h1>Unsere Produkte, Dein Gewinn</h1>
            <ProductList />
            <ProductHelp />
        </div>
    );
};

Products.displayName = 'Products';

export default Products;
