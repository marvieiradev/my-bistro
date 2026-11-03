import { useEffect, useState } from "react";
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../../components/ui/field";
import Loading from "../loading/page";

export default function Cart() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const [errorPassword, setErrorPassword] = useState(false);
  const { login, signup, authLoading, errorLogin, errorSignup } =
    authServices();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

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
          setErrorPassword(true);
          return;
        }
        signup(formData);
        break;
      default:
        break;
    }
  };

  if (authLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full items-center-safe mt-4! p-4!">
      <form className="w-full max-w-120" onSubmit={handleSubmitForm}>
        {formType === "login" ? (
          <>
            <h1 className="text-center text-xl md:text-2xl font-semibold mb-10!">
              Entre na sua conta
            </h1>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel
                    htmlFor="username"
                    className="text-background md:text-lg"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                    required
                    onChange={handleFormDataChange}
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="password"
                    className="text-background md:text-lg"
                  >
                    Senha
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    onChange={handleFormDataChange}
                  />
                </Field>
              </FieldGroup>
              {errorLogin && (
                <span className="text-center text-sm mt-4! md:text-base text-red-600 font-semibold">
                  Erro ao realizar login. Verifique suas credenciais.
                </span>
              )}
              <div className="flex flex-col w-full items-center justify-center">
                <Button type="submit" className="w-20 md:text-lg md:w-25">
                  Entrar
                </Button>
                <span
                  className="text-sm mt-4! md:text-base text-blue-600 cursor-pointer"
                  onClick={handleChangeFormType}
                >
                  Ainda não tem uma conta? Cadastre-se
                </span>
              </div>
            </FieldSet>
          </>
        ) : null}

        {formType === "signup" ? (
          <>
            <h1 className="text-center text-xl md:text-2xl font-semibold mb-10!">
              Cadastre-se para entrar
            </h1>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel
                    htmlFor="fullname"
                    className="text-background md:text-lg"
                  >
                    Nome
                  </FieldLabel>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Digite seu nome"
                    name="fullname"
                    required
                    onChange={handleFormDataChange}
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="email"
                    className="text-background md:text-lg"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                    required
                    onChange={handleFormDataChange}
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="password"
                    className="text-background md:text-lg"
                  >
                    Senha
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    onChange={handleFormDataChange}
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="confirmPassword"
                    className="text-background md:text-lg"
                  >
                    Confirmar Senha
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    name="confirmPassword"
                    onChange={handleFormDataChange}
                  />
                </Field>
              </FieldGroup>
              {errorPassword && (
                <span className="text-center text-sm mt-4! md:text-base text-red-600 font-semibold">
                  As senhas não coincidem.
                </span>
              )}
              {errorSignup && (
                <span className="text-center text-sm mt-4! md:text-base text-red-600 font-semibold">
                  Erro ao realizar cadastro. Tente novamente mais tarde.
                </span>
              )}
              <div className="flex flex-col w-full items-center justify-center">
                <Button type="submit" className="w-30 md:text-lg md:w-35">
                  Enviar
                </Button>
                <p
                  className="text-sm md:text-base text-center mt-4! text-blue-600 cursor-pointer"
                  onClick={handleChangeFormType}
                >
                  Já tem uma conta? Faça login
                </p>
              </div>
            </FieldSet>
          </>
        ) : null}
      </form>
    </div>
  );
}
