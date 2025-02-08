import React from 'react';

const RegisterForm = () => {
	return (
		<form
			onSubmit={'handleSumbit'}
			className="space-y-4"
		>
			<div>
				<label
					htmlFor="firstname"
					className="block text-sm font-medium text-gray-700"
				>
					Nombre
				</label>
				<input
					onChange={'handleOnChange'}
					type="text"
					id="firstname"
					name="firstname"
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<label
					htmlFor="lastname"
					className="block text-sm font-medium text-gray-700"
				>
					Apellido
				</label>
				<input
					onChange={'handleOnChange'}
					type="text"
					id="lastname"
					name="lastname"
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					onChange={'handleOnChange'}
					type="text"
					id="email"
					name="email"
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium text-gray-700"
				>
					Contraseña
				</label>
				<input
					onChange={'handleOnChange'}
					type="password"
					id="password"
					name="password"
					className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
				/>
			</div>
			<div>
				<button
					type="submit"
					className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
				>
					Registrar
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;