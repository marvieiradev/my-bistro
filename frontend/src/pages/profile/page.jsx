import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";

export default function Profile() {
  const { logout } = authServices();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (!authData) {
      return navigate("/auth");
    }
  }, [authData]);

  const handleLoguot = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>{authData?.user?.fullname}</h1>
      <p>{authData?.user?.email}</p>
      <button onClick={handleLoguot}>Sair</button>
    </div>
  );
}
