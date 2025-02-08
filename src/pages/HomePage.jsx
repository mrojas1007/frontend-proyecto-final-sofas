import React from 'react';
import useProduct from '../hooks/useProduct';

const HomePage = () => {
	const { products } = useProduct();

	console.log(products, 'Products home');

	return <h1>EL UNICO MARKETPLACE DE SOFAS EN CHILE</h1>;
		
};


export default HomePage;