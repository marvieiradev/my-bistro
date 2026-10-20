import { useCartContext } from "../contexts/useCartContext";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import PlateCard from "./plateCard";
import PlatePopup from "./platePopup";

export default function PlateDialog({ plateData }) {
  const { addToCart } = useCartContext();

  const [plateSelected, setPlateSelected] = useState(null);

  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd);
    setPlateSelected(null);
  };

  const handlePlateSelected = (plate) => {
    setPlateSelected(plate);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <PlateCard plateData={plateData} onClick={handlePlateSelected}/>
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
