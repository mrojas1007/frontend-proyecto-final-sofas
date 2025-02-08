import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

const RegisterPage = () => {
	return (
		<Fragment>
			<div className="flex h-screen">

				<div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
					<div className="max-w-md w-full p-6">
						<h1 className="text-3xl font-semibold mb-6 text-black text-center">
							Completar registro
						</h1>
						<RegisterForm />
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

export default RegisterPage;