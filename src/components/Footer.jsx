import React from 'react';

const Footer = () => {
	return (
		<footer
				style={{
					textAlign: 'center',
					backgroundColor: '#0082fd', // Cambia el color del fondo del footer
					color: 'white', // Color del texto
					padding: '24px 0', // Añadir padding para un mejor espaciado
					fontSize: '14px', // Ajustar tamaño de fuente
				}}
			>
				<div style={{ marginBottom: '8px' }}>
					Sofapp ©{new Date().getFullYear()} Creado para Desafío Latam
				</div>
				<div>
					<a
						href="/"
						style={{ color: 'white', marginRight: '15px' }}
					>
						Inicio
					</a>
					<a
						href="/"
						style={{ color: 'white', marginRight: '15px' }}
					>
						Acerca de nosotros
					</a>
					<a
						href="/"
						style={{ color: 'white' }}
					>
						Contacto
					</a>
				</div>
			</footer>
			);
		};

export default Footer;