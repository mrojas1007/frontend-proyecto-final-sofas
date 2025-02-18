import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [id_usuario, setIdUsuario] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [nombreUsuario, setNombreUsuario] = useState(localStorage.getItem("nombreUsuario") || "");
  const [apellidoUsuario, setApellidoUsuario] = useState(localStorage.getItem("apellidoUsuario") || "");
  const [emailUsuario, setEmailUsuario] = useState(localStorage.getItem("emailUsuario") || "");
  const [passUsuario, setPassUsuario] = useState(localStorage.getItem("passUsuario") || "");  
  const [fonoUsuario, setFonoUsuario] = useState(localStorage.getItem("fonoUsuario") || ""); 

  // useEffect(() => {
  //   const storedUserId = localStorage.getItem("id_usuario");
  //   if (storedUserId) {
  //     setIdUsuario(storedUserId);
  //   }
  // }, []);

  useEffect(() => {
    setIdUsuario(localStorage.getItem("id_usuario") || "");
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await fetch("http://localhost:2000/producto/todos");
      if (!response.ok) throw new Error("Error al obtener productos");

      const data = await response.json();

      if (!Array.isArray(data)) throw new Error("La respuesta no es un array válido");

      setProductos(data);
      return data; 
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return []; 
    }
  };

  const fetchProductoById = async (id) => {
    try {
      const productoId = parseInt(id, 10);
      if (isNaN(productoId)) throw new Error("ID de producto inválido");

      const response = await fetch(
        `http://localhost:2000/producto/${productoId}`
      );
      if (!response.ok) throw new Error("No se encontró el producto");

      return await response.json();
    } catch (error) {
      console.error("Error al obtener producto por ID:", error);
      return null;
    }
  };

  const fetchProductosByMarca = async (marca) => {
    try {
      const response = await fetch(`http://localhost:2000/producto/marca/${marca}`);
      if (!response.ok) throw new Error("Error al obtener productos por marca");
      return await response.json();
    } catch (error) {
      console.error("Error al obtener productos por marca:", error.message);
      return [];
    }
  };
  
  const fetchProductosByTipo = async (tipo) => {
    try {
      const response = await fetch(`http://localhost:2000/producto/tipo/${tipo}`);
      if (!response.ok) throw new Error("Error al obtener productos por tipo");
      return await response.json();
    } catch (error) {
      console.error("Error al obtener productos por tipo:", error.message);
      return [];
    }
  };
  
  const fetchProductosByCuerpo = async (cuerpo) => {
    try {
      const response = await fetch(`http://localhost:2000/producto/cuerpo/${cuerpo}`);
      if (!response.ok) throw new Error("Error al obtener productos por cuerpo");
      return await response.json();
    } catch (error) {
      console.error("Error al obtener productos por cuerpo:", error.message);
      return [];
    }
  };
  
  const fetchObtenerProductosUsuario = async (id_usuario) => {
    try {
      const response = await fetch(
        `http://localhost:2000/producto/usuario/${id_usuario}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || "Error al obtener los productos.");
      }
      return data; // Devuelve la lista de productos
    } catch (error) {
      console.error("Error en fetchObtenerProductosUsuario:", error);
      return [];
    }
  };

  const fetchCrearProducto = async (producto) => {
    console.log("Enviando producto al backend:", producto);
    try {
      const response = await fetch("http://localhost:2000/producto/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(producto),
      });
      return await response.json();
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  const fetchAgregarUsuario = async (usuario) => {
    try {
      const response = await axios.post(
        "http://localhost:2000/usuario/register",
        usuario
      );
      console.log("Respuesta del backend al registrar usuario:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error al registrar usuario:",
        error.response?.data || error.message || error
      );
      throw error;
    }
  };

  const fetchLoginUsuario = async (email, pass) => {
    try {
      const response = await fetch("http://localhost:2000/usuario/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pass }),
      });

      if (!response.ok) throw new Error("Error en las credenciales");
      const data = await response.json();
      const { token, nombre, apellido, email: emailResp, id_usuario, pass: passResp ,  fono} = data;

      if (!id_usuario) throw new Error("El backend no retornó id_usuario correctamente");

      localStorage.setItem("token", token);
      localStorage.setItem("id_usuario", id_usuario);
      localStorage.setItem("nombreUsuario", nombre || "");
      localStorage.setItem("apellidoUsuario", apellido || "");
      localStorage.setItem("emailUsuario", emailResp || "");
      localStorage.setItem("passUsuario", passResp || "");
      localStorage.setItem("fonoUsuario", fono || "");

      setToken(token);
      setIdUsuario(id_usuario);
      setNombreUsuario(nombre || "");
      setApellidoUsuario(apellido || "");
      setEmailUsuario(emailResp || "");
      setPassUsuario(passResp || "");
      setFonoUsuario(fono || "");

      return token;
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message || error);
      throw error;
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id_usuario");
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("apellidoUsuario");
    localStorage.removeItem("emailUsuario");
    localStorage.removeItem("passUsuario");
    localStorage.removeItem("fonoUsuario");

    setToken("");
    setIdUsuario("");
    setNombreUsuario("");
    setApellidoUsuario("");
    setEmailUsuario("");
    setPassUsuario("");
    setFonoUsuario("");
  };

  const fetchUltimosProductos = async () => {
    try {
      const response = await fetch("http://localhost:2000/producto/cincoultimos");
      return await response.json();
    } catch (error) {
      console.error("Error al obtener los últimos 5 productos:", error);
      return [];
    }
  }; 
  const fetchDatosUsuarioPorProducto = async (id_producto) => {
    try {
      const response = await fetch(`http://localhost:2000/usuario/producto/${id_producto}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos del usuario.");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{
        productos,
        fetchProductos,   
        fetchProductoById,
        fetchProductosByMarca,
        fetchProductosByTipo,
        fetchProductosByCuerpo,
        fetchCrearProducto,
        fetchAgregarUsuario,
        fetchLoginUsuario,
        token,
        setToken,
        nombreUsuario,
        apellidoUsuario,
        emailUsuario,
        passUsuario,
        fonoUsuario,
        cerrarSesion,
        id_usuario,
        setIdUsuario,
        fetchObtenerProductosUsuario,
        fetchUltimosProductos,
        fetchDatosUsuarioPorProducto,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
