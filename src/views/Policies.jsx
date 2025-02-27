import React from 'react';

const PoliciesView = () => {
    return (
        <div className="col-10 col-sm-10 col-md-10 mx-auto mt-5 px-3 pt-3 border border-dark rounded" style={{marginBottom: '50vh'}}>
            <h1 className="politics-title">Políticas del Marketplace</h1>
            <section className="politics-section">
                <h3 className="politics-subtitle">Política de Privacidad</h3>
                <p className="politics-text">
                    En nuestro marketplace, valoramos tu privacidad. Toda la información personal que compartas con nosotros será tratada con la máxima confidencialidad y seguridad.
                </p>
            </section>
            <section className="politics-section">
                <h3 className="politics-subtitle">Política de Envíos</h3>
                <p className="politics-text">
                    Los vendedores son responsables de enviar los productos a los clientes. Los tiempos de entrega pueden variar según la ubicación del vendedor y del cliente.
                </p>
            </section>
            <section className="politics-section">
                <h3 className="politics-subtitle">Política de Comunicación</h3>
                <p className="politics-text">
                    Los vendedores deben mantener una comunicación clara y oportuna con los clientes para resolver cualquier duda o problema relacionado con la compra.
                </p>
            </section>
        </div>
    );
};

export default PoliciesView;