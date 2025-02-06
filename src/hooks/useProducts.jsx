import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';

export const useAuth = () => {
	const { products } = useContext(ProductContext);

	return {
		products,
	};
};