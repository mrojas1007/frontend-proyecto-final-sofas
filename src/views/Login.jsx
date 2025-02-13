import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { fetchLoginUsuario } = useContext(UserContext);
  const [user, setUser] = useState({ email: "", pass: "" });

  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      const token = await fetchLoginUsuario(user.email, user.pass);
      if (token) {
        navigate("/profile");
      }
    } catch (error) {
      window.alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className="col-10 col-sm-6 col-md-3 m-auto mt-5 p-3 border border-dark rounded mb-5"
    >
      <h1>Iniciar Sesión</h1>
      <hr />
      <div className="form-group mt-1">
        <label>Email</label>
        <input
          value={user.email}
          onChange={handleUser}
          type="email"
          name="email"
          className="form-control"
          placeholder="ej. juan.perez@gmail.com"
        />
      </div>
      <div className="form-group mt-1">
        <label>Contraseña</label>
        <input
          value={user.pass}
          onChange={handleUser}
          type="password"
          name="pass"
          className="form-control"
          placeholder="Contraseña"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-dark mt-3">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default Login;
