import React, { useState, useEffect } from "react";
import useUser from "../../hooks/useUser";
import ButtonComponent from "../../components/Button/index";
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginInput,
} from "./styles";

export default function Login({ onLogin, navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, login, isError, isLoginLoading } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
      onLogin && onLogin();
    }
  }, [isLogged, onLogin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginFormContainer>
      {isError && <strong>Usuario o Contraseña invalidos.</strong>}
      {isLoginLoading && <strong>Validando Credenciales....</strong>}
      {!isLoginLoading && (
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit}>
            <label htmlFor="username">Usuario</label>
            <LoginInput
              id="username"
              required
              onChange={handleUsername}
              type="text"
              placeholder="username"
              value={username}
            ></LoginInput>
            <label htmlFor="password">Contraseña</label>
            <LoginInput
              id="password"
              required
              onChange={handlePassword}
              type="password"
              placeholder="password"
              value={password}
            ></LoginInput>
            <ButtonComponent type="submit">Iniciar Sesión</ButtonComponent>
            {isLogged && <p>Inciaste Sesión Satisfactoriamente. 💚</p>}
          </LoginForm>
        </LoginContainer>
      )}
    </LoginFormContainer>
  );
}
