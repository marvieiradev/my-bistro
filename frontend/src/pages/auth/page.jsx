import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const { login, signup, authLoading } = authServices();
  const navigate = useNavigate();
  const authData = (JSON.parse = localStorage.getItem("auth"));

  useEffect(() => {
    if (authData) {
      return navigate("/profile");
    }
  }, [authData]);

  const handleChangeFormType = () => {
    setFormData(null);
    if (formType === "login") {
      setFormType("signup");
    } else {
      setFormType("login");
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    switch (formType) {
      case "login":
        login(formData);
        break;
      case "signup":
        if (formData.password !== formData.confirmPassword) {
          window.alert("As senhas precisam ser iguais.");
          return;
        }
        signup(formData);
        break;
      default:
        break;
    }
  };

  if (authLoading) {
    return <h1>Carregando</h1>;
  }

  return (
    <div className={styles.authPageContainer}>
      {formType === "login" ? (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmitForm}>
            <TextField
              required
              label="Email"
              type="email"
              placeholder="Digite seu email"
              name="email"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Password"
              type="password"
              placeholder="Digite sua senha"
              name="password"
              onChange={handleFormDataChange}
            />
            <Button type="submit">Login</Button>
          </form>
          <button onClick={handleChangeFormType}>
            Ainda não tem uma conta? Cadastre-se
          </button>
        </>
      ) : null}

      {formType === "signup" ? (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmitForm}>
            <TextField
              required
              label="Name"
              type="text"
              placeholder="Digite seu nome"
              name="fullname"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Email"
              type="email"
              placeholder="Digite seu email"
              name="email"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              name="password"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Confirmar Senha"
              type="password"
              placeholder="Digite sua senha novamente"
              name="confirmPassword"
              onChange={handleFormDataChange}
            />
            <Button type="submit">Cadastrar</Button>
          </form>
          <button onClick={handleChangeFormType}>
            Já tem uma conta? Faça login
          </button>
        </>
      ) : null}
    </div>
  );
}
