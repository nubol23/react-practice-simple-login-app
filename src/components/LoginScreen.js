import jwtDecode from 'jwt-decode';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import authApi from '../api/authApi'
import { AuthContext } from '../auth/authContext';
import { useForm } from '../hooks/useForm'
import { authTypes } from '../types/types';
import "./login.css"

export const LoginScreen = () => {

  const { userDispatch } = useContext(AuthContext);

  const [message, setMessage] = useState('');

  const [{ email, password }, handleInputChange] = useForm({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    authApi.post("users/token/", {
      email,
      password,
    }).then((response) => {

      const decoded = jwtDecode(response.data.access)
      const payload = {
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        issuedAt: decoded.iat,
        expiresAt: decoded.exp,
        userId: decoded.user_id,
        firstName: decoded.first,
        email: decoded.email,
      }

      setMessage('')

      userDispatch({ type: authTypes.login, payload });

      navigate('/', { replace: true });
    }).catch((error) => {
      setMessage(msg => "Error al autenticar")
    })
  }

  return (
    <div className="login-box">

      <form onSubmit={handleLogin} className="form-box">
        <input
          className="form-control mb-4"
          type="text"
          placeholder="correo"
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="form-control mb-4"
          type="password"
          placeholder="contraseña"
          name="password"
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />

        <button type='submit' className="btn btn-primary btn-block">
          Login
        </button>

        <br />
        {
          (message !== '') && <p>{message}</p>
        }
      </form>
    </div>
  )
}
