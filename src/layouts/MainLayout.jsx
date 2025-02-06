import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content, Footer } = Layout;

export const MainLayout = () => {
	const items = [
		{ title: <Link to="/">Home</Link>, key: 'home' },
		{ title: <Link to="/products">POroducts</Link>, key: 'products' },
	];

	const items1 = [
		{ label: <Link to="/login">Login</Link>, key: 'login' },
		{ label: <Link to="/register">Register</Link>, key: 'register' },
		{ label: <Link to="/profile">Profile</Link>, key: 'profile' },
	];

	const items2 = [
		{ label: 'Filter 1', key: '1' },
		{ label: 'Filter 2', key: '2' },
		{ label: 'Filter 3', key: '3' },
	];

	const logoStyle = {
		display: 'flex',
		alignItems: 'center',
		marginRight: 'auto',
	};

	return (
		<Layout className="min-h-screen">
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<div style={logoStyle}>
					<img
						src="/logo.png"
						alt="Logo"
						style={{ height: 40 }}
					/>
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					items={items1}
					style={{
						flex: 1,
						justifyContent: 'flex-end',
					}}
				/>
			</Header>
			<Content
				style={{
					padding: '0 48px',
					minHeight: '100vh',
				}}
			>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}
					items={items}
				/>
				<Layout
					style={{
						padding: '24px 0',
						background: '#f0f2f5',
					}}
				>
					<Sider
						style={{
							background: '#ffffff',
						}}
						width={200}
					>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							style={{
								height: '100%',
							}}
							items={items2}
						/>
					</Sider>
					<Content
						style={{
							padding: '0 24px',
							minHeight: 100,
							background: '#ffffff',
							borderRadius: '8px',
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Content>
			<Footer
				style={{
					textAlign: 'center',
					backgroundColor: '#001529',
					color: 'white',
					padding: '24px 0',
					fontSize: '14px',
				}}
			>
				<div style={{ marginBottom: '8px' }}>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</div>
				<div>
					<a
						href="/"
						style={{ color: 'white', marginRight: '15px' }}
					>
						Home
					</a>
					<a
						href="/"
						style={{ color: 'white', marginRight: '15px' }}
					>
						About Us
					</a>
					<a
						href="/"
						style={{ color: 'white' }}
					>
						Contact
					</a>
				</div>
			</Footer>
		</Layout>
	);
};