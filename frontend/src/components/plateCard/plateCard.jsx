import PlatePopup from "../platePopup/platePopup";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { useCartContext } from "../../contexts/useCartContext";
import { useState } from "react";

export default function PlateCard({ plateData }) {
  const { addToCart } = useCartContext();

  const [plateSelected, setPlateSelected] = useState(null);

  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd);
setPlateSelected(null)
  };

  const handlePlateSelected = (plate) => {
    setPlateSelected(plate);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex flex-col items-center justify-end w-[320px] h-105 relative cardContainer" onClick={handlePlateSelected}>
            <img src={plateData.imgUrl} alt="" className="w-full h-full object-cover rounded-md" />
            <div className="flex flex-col gap-4 absolute w-[90%] pb-1">
              <h4>{plateData.name}</h4>
              <h3 className="text-right">$ {plateData.price}</h3>
            </div>
          </div>
        </DialogTrigger>
        {plateSelected && (
          <DialogContent>
            <PlatePopup plateData={plateData} onAddToCart={handleAddToCart} />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
