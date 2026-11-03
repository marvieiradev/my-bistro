import { useState } from "react";

export default function authServices() {
  const [authLoading, setAuthLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
   const [errorSignup, setErrorSignup] = useState(false);
  const url = "http://localhost:3000/auth";
  const login = (formData) => {
    setAuthLoading(true);
    fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success && result.body.token) {
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.body.token,
              user: result.body.user,
            }),
          );
        }
        if (!result.success) {
          setErrorLogin(true);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };
  const logout = () => {
    localStorage.removeItem("auth");
  };

  const signup = (formData) => {
    setAuthLoading(true);
    fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success && result.body.token) {
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result.body.token,
              user: result.body.user,
            }),
          );
        }
      })
      .catch((error) => {
        console.error("Error on signup:", error);
        setErrorSignup(true);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };
  return {
    signup,
    login,
    logout,
    authLoading,
    errorLogin,
    errorSignup,
  };
}
