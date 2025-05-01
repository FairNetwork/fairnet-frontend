import { PRODUCTS } from '../constants/product';

export const useProducts = () => {
    return PRODUCTS.map(({ id }) => id);
};

export const useProduct = (productId: string) => {
    return PRODUCTS.find(({ id }) => id === productId);
};
