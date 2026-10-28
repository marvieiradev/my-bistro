import { useState } from "react";
import { useCartContext } from "../../contexts/useCartContext";
import { LuCircleMinus } from "react-icons/lu";
import ConfirmOrderPopup from "../../components/confirmOrderPopup";
import orderServices from "../../services/order";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { toast } from "../../components/ui/toast"
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateCartItems, removeFromCart, clearCart } =
    useCartContext();
  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const { sendOrder } = orderServices();

  const navigate = useNavigate();

  const handleChangeItemQty = (mode, itemId) => {
    const updatedCartItem = cartItems.map((item) => {
      if (item._id === itemId) {
        if (mode === "less" && item.quantity > 1) {
          item.quantity -= 1;
        } else if (mode === "more") {
          item.quantity += 1;
        }
      }

      return item;
    });

    updateCartItems(updatedCartItem);
  };

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setConfirmPopupOpen(!confirmPopupOpen);
  };

  const handleConfirmOrder = (orderData) => {
    orderData.items = cartItems.map((item) => {
      return { plateId: item._id, quantity: item.quantity };
    });
    sendOrder(orderData);
    setConfirmPopupOpen(!confirmPopupOpen);
    toast.add({
      type: "success",
      description: "Ordem confirmada!",
    });
    clearCart();
  };

  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center justify-center mt-8! gap-8!">
        <h1 className="text-2xl">Seu carrinho está vazio... :/</h1>
        <Button onClick={() => navigate("/plates")} className="w-50">
          Veja nossos pratos!
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col max-w-300 gap-2! p-2!">
        <p className="text-xl mt-2! lg:mt-4!">Seus items:</p>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2! mt-2! lg:mt-4!">
            {cartItems.map((item) => (
              <Card className="bg-amber-100">
                <div className="flex flex-col" key={item._id}>
                  <div className="flex flex-col justify-center items-center bg-background">
                    <h2 className="text-sm md:text-xl font-semibold pt-2!">
                      {item.name}
                    </h2>
                    <p className="text-sm md:text-lg mb-2! font-light text-center">
                      [{String(item.ingredients)}]
                    </p>
                  </div>
                  <div className="flex gap-1! w-full bg-amber-100 text-background">
                    <img
                      src={item.imgUrl}
                      className="object-cover w-30 md:w-50 md:h-60"
                    />
                    <div className="flex flex-col mt-2! gap-2! pl-2!">
                      <p className="text-sm md:text-lg">{item.description}</p>
                      <div className="flex items-center gap-2!">
                        <p className="text-sm md:text-lg">Porções:</p>
                        <div className="flex gap-2! justify-center items-center">
                          <Button
                            className="text-sm md:text-lg w-9"
                            onClick={() => {
                              handleChangeItemQty("less", item._id);
                            }}
                          >
                            -
                          </Button>
                          <p className="text-sm md:text-lg">{item.quantity}</p>
                          <Button
                            className="text-sm md:text-lg w-9"
                            onClick={() => {
                              handleChangeItemQty("more", item._id);
                            }}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="flex w-full justify-start m-2! md:m-4!">
                        <Button
                          className="w-50"
                          onClick={() => {
                            removeFromCart(item._id);
                          }}
                        >
                          <LuCircleMinus /> Remover item
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <ConfirmOrderPopup
        open={handleOpenPopup}
        onClose={handleOpenPopup}
        onConfirm={handleConfirmOrder}
      />
    </>
  );
}
