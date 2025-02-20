import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const MySpinner = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : (
        <p className="fade-in">{data}</p>
      )}
    </div>
  );
};

export default MySpinner;
