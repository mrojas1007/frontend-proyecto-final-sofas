import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

export const useAuth = () => {
	const { cart } = useContext(CartContext);

	return {
		cart,
	};
};