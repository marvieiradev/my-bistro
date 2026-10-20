import platesServices from "../../services/plates";
import { useEffect, useState } from "react";
import Loading from "../loading/page";
import { useCartContext } from "../../contexts/useCartContext";
import PlateDialog from "../../components/plateDialog";

export default function Plates() {
  const { getAvailablePlates, platesList, platesLoading, refetchPlates } =
    platesServices();
  const [plateSelected, setPlateSelected] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    if (refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  const handlePlateSelected = (plate) => {
    setPlateSelected(plate);
  };

  const handleClosePopup = () => {
    setPlateSelected(null);
  };

  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd);
    handleClosePopup();
  };

  if (platesLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4!">
        {platesList.map((plate) => (
          <div
            key={plate._id}
            className="flex flex-col justify-center items-center"
            onClick={() => {
              handlePlateSelected(plate);
            }}
          >
            <PlateDialog plateData={plate} />
          </div>
        ))}
      </div>
    </>
  );
}
