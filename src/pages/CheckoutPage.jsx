import { loadStripe } from '@stripe/stripe-js';
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import {
	Card,
	Typography,
	List,
	Image,
	Button,
	Space,
	Divider,
	Spin,
} from 'antd';
import { useCallback } from 'react';
const { Text, Title } = Typography;

export const CheckoutPage = () => {
	const stripePromise = loadStripe(
		'pk_test_51OybZCJeiIjQLCHnAwDTdRvPv9josrDoNeeQ8YziGWf9Rtl5BObkx4ZiQSVdqTMYptq5nqpfLF84Vf8G36iWKWld00bxahWKxs'
	);

	// Simulated Cart Data
	const cart = [
		{
			name: 'Producto 1',
			price: 10.99,
			image: 'https://via.placeholder.com/150',
			quantity: 5,
		},
		{
			name: 'Producto 2',
			price: 24.99,
			image: 'https://via.placeholder.com/150',
			quantity: 10,
		},
		{
			name: 'Producto 3',
			price: 7.5,
			image: 'https://via.placeholder.com/150',
			quantity: 3,
		},
		{
			name: 'Producto 4',
			price: 15.75,
			image: 'https://via.placeholder.com/150',
			quantity: 8,
		},
	];

	const fetchClientSecret = useCallback(() => {
		// return fetch('http://127.0.0.1:3001/create-checkout-session', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({ cart }),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => data.clientSecret);
	}, [cart]);

	const options = { fetchClientSecret };

	// Calculate Total
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
			<Title
				level={2}
				style={{ textAlign: 'center', marginBottom: '24px' }}
			>
				Checkout Page
			</Title>

			<Card
				title="Payment"
				style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
				bordered={false}
			>
				<EmbeddedCheckoutProvider
					stripe={stripePromise}
					options={options}
				>
					<EmbeddedCheckout />
				</EmbeddedCheckoutProvider>
				<div style={{ textAlign: 'center', marginTop: '16px' }}>
					<Spin
						tip="Processing payment..."
						spinning={false}
					/>
				</div>
			</Card>

			<div style={{ textAlign: 'center', marginTop: '24px' }}>
				<Button
					type="primary"
					size="large"
					style={{ borderRadius: '8px' }}
					onClick={() => console.log('Payment submitted')}
				>
					Submit Payment
				</Button>
			</div>
		</div>
	);
};