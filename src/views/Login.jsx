import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { fetchLoginUsuario } = useContext(UserContext);
  const [user, setUser] = useState({ email: "", pass: "" });
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="form-group mt-1 position-relative">
        <label>Contraseña</label>
        <div className="input-group">
          <input
            value={user.pass}
            onChange={handleUser}
            type={showPassword ? "text" : "password"}
            name="pass"
            className="form-control"
            placeholder="Contraseña"
          />
          <button
            type="button"
            className="btn"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              border: "none",
              background: "black",
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "5px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <i
              className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
              style={{ color: "white", fontSize: "18px" }}
            ></i>
          </button>
        </div>
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
