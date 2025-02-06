import { Button, Card, List, Space, Typography } from 'antd';

const { Text, Title } = Typography;

export const CartPage = () => {
	const cartItems = [
		{ id: 1, name: 'Product 1', price: 20, quantity: 1 },
		{ id: 2, name: 'Product 2', price: 15, quantity: 2 },
		{ id: 3, name: 'Product 3', price: 30, quantity: 1 },
	];

	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
			<Title
				level={2}
				style={{ marginBottom: '24px', textAlign: 'center' }}
			>
				Your Cart
			</Title>
			<Card>
				<List
					dataSource={cartItems}
					renderItem={(item) => (
						<List.Item
							actions={[
								<Button
									type="link"
									danger
								>
									Remove
								</Button>,
							]}
						>
							<Space
								direction="vertical"
								style={{ width: '100%' }}
							>
								<Text strong>{item.name}</Text>
								<Text>
									Price: ${item.price} x {item.quantity}
								</Text>
								<Text>Total: ${item.price * item.quantity}</Text>
							</Space>
						</List.Item>
					)}
				/>
				<div style={{ marginTop: '24px', textAlign: 'right' }}>
					<Title level={4}>Total: ${total}</Title>
					<Button
						type="primary"
						size="large"
					>
						Proceed to Checkout
					</Button>
				</div>
			</Card>
		</div>
	);
};