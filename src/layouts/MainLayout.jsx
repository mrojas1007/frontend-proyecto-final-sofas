import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
	const items1 = [
		{ label: <Link to="/register">Registrarse</Link>, key: 'register' },
		{ label: <Link to="/login"><button>Iniciar sesión</button></Link>, key: 'login' },
		// { label: <Link to="/profile">Mi perfil</Link>, key: 'profile' },
	];

	const items = [
		{ title: <Link to="/">Inicio</Link> },
		{ title: <Link to="/list">List</Link> },
		{ title: <Link to="/app">App</Link> },
	];

	const logoStyle = {
		display: 'flex',
		alignItems: 'center',
		marginRight: 'auto', // Alinea el logo a la izquierda
	};

	return (
		<Layout className="min-h-screen">
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
					background: '#0082fd',
					justifyContent: 'space-between', // Alinea elementos en extremos
				}}
			>
				<div style={logoStyle}>
					{/* Reemplaza esto con tu logo */}
					<img
						src="/public/sofa-svgrepo-com.svg"
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
						justifyContent: 'flex-end', // Alinea los enlaces a la derecha
					}}
				/>
			</Header>
			<Content
				style={{
					padding: '0 48px',
					minHeight: '100vh', // Asegura que el contenido tenga una altura mínima del 100%
				}}
			>
				<Breadcrumb
					style={{
						margin: '76px 0',
					}}
					items={items}
				/>
				<Layout
					style={{
						padding: '24px 0',
						background: '#0082fd', // Cambia esto por el color que prefieras
					}}
				>
					<Content
						style={{
							padding: '0 24px',
							minHeight: 100, // Asegura que el contenido tenga una altura mínima de 100
							background: '#ffffff', // Fondo del contenido principal
							borderRadius: '0px', // Bordes redondeados
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Content>
			
		</Layout>
	);
};

export default MainLayout;