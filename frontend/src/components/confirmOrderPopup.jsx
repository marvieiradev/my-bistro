import { Dialog } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function ConfirmOrderPopup({ open, onClose, onConfirm }) {
  const [formData, setFormData] = useState(null);
  const authData = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();

    if (!authData?.user?._id) {
      return navigate("/auth");
    } else {
      if (!formData?.pickupTime) {
        return;
      } else {
        const orderData = {
          userId: authData?.user?._id,
          pickupTime: formData?.pickupTime,
        };
        onConfirm(orderData);
      }
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex flex-col gap-2 p-2 bg-[#faf0ca] text-black ">
        <h2>Já estamos quase lá...</h2>
        <p>
          Confirme seu pedido com a data atual:{" "}
          <strong>{new Date().toLocaleDateString()}</strong>. A que horas você
          vai vir buscar o seu pedido?
        </p>
        <form className="">
          <TextField
            onChange={handleFormDataChange}
            required
            type="time"
            name="pickupTime"
          />
          <div className="flex gap-8!">
            <Button className="" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleConfirm}>Confirmar</Button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
