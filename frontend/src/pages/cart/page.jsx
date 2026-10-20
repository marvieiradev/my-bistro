import { useState } from "react";
import { useCartContext } from "../../contexts/useCartContext";
import { LuCircleMinus } from "react-icons/lu";
import ConfirmOrderPopup from "../../components/confirmOrderPopup";
import orderServices from "../../services/order";
import { Button } from "../../components/ui/button";

export default function Cart() {
  const { cartItems, updateCartItems, removeFromCart, clearCart } =
    useCartContext();
  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const { sendOrder } = orderServices();

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
    clearCart();
  };

  if (!cartItems.length) {
    return (
      <div>
        <h1>Seu carrinho está vazio... :/</h1>
        <button>Veja nossos pratos!</button>
      </div>
    );
  }

  return (
    <>
      <div className="felx felx-col items-center gap-2!">
        <h1>Your items:</h1>
        <section>
          <div className="flex flex-col gap-2!">
            {cartItems.map((item) => (
              <div className="grid grid-cols-3 gap-2!" key={item._id}>
                <img src={item.imgUrl} alt="" />
                <div className="flex flex-col gap-1! w-full">
                  <h2>{item.name}</h2>
                  <p>[{String(item.ingredients)}]</p>
                  <p>{item.description}</p>
                  <div className="flex items-center gap-2!">
                    <p>Portions:</p>
                    <p>{item.quantity}</p>
                    <div className="flex gap-2!">
                      <button
                        onClick={() => {
                          handleChangeItemQty("less", item._id);
                        }}
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          handleChangeItemQty("more", item._id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                  >
                    <LuCircleMinus /> Remover item
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Button className="" onClick={handleOpenPopup}>
          Confirme sua ordem!
        </Button>
      </div>

      <ConfirmOrderPopup
        open={confirmPopupOpen}
        onClose={handleOpenPopup}
        onConfirm={handleConfirmOrder}
      />
    </>
  );
}
