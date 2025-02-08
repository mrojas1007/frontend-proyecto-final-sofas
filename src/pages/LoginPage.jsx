import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const LoginPage = () => {
	return (
		<Fragment>
			<div className="flex h-screen">
				<div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
					<div className="max-w-md w-full p-6">
						<h1 className="text-3xl font-semibold mb-6 text-black text-center">
							Iniciar sesión
						</h1>
						<LoginForm />
					</div>
				</div>
				<Link to="/">
					<h3>Volver al inicio</h3>
				</Link>
			</div>
			<Footer />
		</Fragment>
	);
};

export default LoginPage;