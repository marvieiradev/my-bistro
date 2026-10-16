import { useEffect, useState } from "react";
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../../components/ui/field";

export default function Cart() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const { login, signup, authLoading } = authServices();
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
    <div className="flex flex-col w-full items-center-safe mt-4! p-4!">
      <form className="w-full max-w-120" onSubmit={handleSubmitForm}>
        {formType === "login" ? (
          <>
            <h1 className="text-center mb-4!">Login</h1>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">Email</FieldLabel>
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
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    onChange={handleFormDataChange}
                  />
                </Field>
              </FieldGroup>
              <div className="flex flex-col w-full items-center justify-center">
                <Button type="submit">Login</Button>
                 <span
              className="text-sm mt-4! text-blue-600 cursor-pointer"
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
            <h1 className="text-center mb-4!">Cadastrar</h1>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="fullname">Nome</FieldLabel>
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
                  <FieldLabel htmlFor="email">Email</FieldLabel>
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
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    onChange={handleFormDataChange}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
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
              <div className="flex flex-col w-full items-center justify-center">
                <Button type="submit">Cadastrar</Button>
                <p
                  className="text-sm text-center mt-4! text-blue-600 cursor-pointer"
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
