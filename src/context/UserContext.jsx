import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
// import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [productos, setProductos] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const fetchProductos = async () => {
//     try {
//       const response = await fetch("http://localhost:2000/productos/todos");
//       const data = await response.json();
//       setProductos(data);
//     } catch (error) {
//       console.error("Error al obtener productos:", error);
//     }
//   };

//   const fetchProductoById = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:2000/productos/${id}`);
//       return await response.json();
//     } catch (error) {
//       console.error("Error al obtener producto por ID:", error);
//     }
//   };

//   const fetchProductosByMarca = async (marca) => {
//     try {
//       const response = await fetch(`http://localhost:2000/productos/marca/${marca}`);
//       return await response.json();
//     } catch (error) {
//       console.error("Error al obtener productos por marca:", error);
//     }
//   };

//   const fetchCrearProducto = async (producto) => {
//     try {
//       const response = await fetch("http://localhost:2000/productos/agregar", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(producto),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error("Error al crear producto:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProductos();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{ productos, fetchProductos, fetchProductoById, fetchProductosByMarca, fetchCrearProducto, setToken }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };
