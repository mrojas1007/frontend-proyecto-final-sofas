import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constants'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const initialForm = {
  email: '',
  password: '123456',
  rol: 'Seleccione un rol',
  lenguage: 'Seleccione un Lenguage'
}

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(initialForm)

  const handleUser = (event) => setUser({ ...user, [event.target.name]: event.target.value })

  const handleForm = (event) => {
    event.preventDefault()

    if (
      !user.email.trim() ||
      !user.password.trim() ||
      user.rol === 'Seleccione un rol' ||
      user.lenguage === 'Seleccione un Lenguage'
    ) {
      return window.alert('Todos los campos son obligatorias.')
    }

    if (!emailRegex.test(user.email)) {
      return window.alert('El formato del email no es correcto!')
    }

    axios.post(ENDPOINT.users, user)
      .then(() => {
        window.alert('Usuario registrado con éxito 😀.')
        navigate('/login')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        window.alert(`${data.message} 🙁.`)
      })
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      navigate('/perfil')
    }
  }, [])

  return (
    <form onSubmit={handleForm} className='col-10 col-sm-6 col-md-3 m-auto mt-5 p-3 border border-dark rounded mb-5'>
      <h1>Completar registro</h1>
      <hr />
      <div className='form-group mt-1 '>
        <label>Nombre</label>
        <input
          value={user.name}
          onChange={handleUser}
          type='text'
          name='name'
          className='form-control'
          placeholder='Nombre'
        />
      </div>
      <div className='form-group mt-1 '>
        <label>Apellido</label>
        <input
          value={user.name}
          onChange={handleUser}
          type='text'
          name='name'
          className='form-control'
          placeholder='Apellido'
        />
      </div>
      <div className='form-group mt-1 '>
        <label>Email</label>
        <input
          value={user.email}
          onChange={handleUser}
          type='email'
          name='email'
          className='form-control'
          placeholder='ej. juan.perez@gmail.com'
        />
      </div>
      <div className='form-group mt-1 '>
        <label>Contraseña</label>
        <input
          value={user.password}
          onChange={handleUser}
          type='password'
          name='password'
          className='form-control'
          placeholder='Constraseña'
        />
      </div>
      <div className="d-flex justify-content-center">
      <button type='submit' className='btn btn-dark mt-3'>Registrar</button>
      </div>    </form>
  )
}

export default Register