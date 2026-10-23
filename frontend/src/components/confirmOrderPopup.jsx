import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./ui/dialog";

export default function ConfirmOrderPopup({ onClose, onConfirm }) {
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
    <Dialog className="bg-foreground">
      <DialogTrigger>
        <div
          className="w-80 mt-8! rounded-full p-2! font-semibold confirmOrder"
          onClick={() => {}}
        >
          Confirme sua ordem!
        </div>
      </DialogTrigger>
      <DialogContent>
        <Card className="text-foreground bg-foreground/20">
          <div className="flex flex-col justify-center items-center gap-4! p-4!">
            <h2 className="text-2xl font-semibold">Já estamos quase lá...</h2>
            <p>
              Confirme seu pedido com a data atual:{" "}
              <strong>{new Date().toLocaleDateString()}</strong>.
            </p>
            <p>A que horas você vai vir buscar o seu pedido?</p>
            <form className="flex flex-col justify-center items-center gap-4!">
              <TextField
                className="bg-foreground/30 rounded-full font-xl"
                onChange={handleFormDataChange}
                required
                type="time"
                name="pickupTime"
              />
              <div className="flex w-full gap-8!">
                <Button className="w-30">
                  <DialogClose>Cancelar</DialogClose>
                </Button>
                <Button className="w-30" onClick={handleConfirm}>
                  Confirmar
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
