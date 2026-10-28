import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function PlatePopup({ plateData, onAddToCart }) {
  return (
    <Card>
      <CardContent>
        <div open={true} className="rounded-3xl">
          <div className="bg-amber-100 text-black">
            <img
              src={plateData.imgUrl}
              alt=""
              className="h-85 w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-4!">
              <h2 className="text-lg font-semibold">{plateData.name}</h2>
              <p className="text-gray-500">
                [{String(plateData.ingredients)}]
              </p>
              <p>{plateData.description}</p>
              <h2 className="text-xl font-bold">R$ {plateData.price}</h2>
              <Button
                onClick={() => {
                  onAddToCart(plateData);
                }}
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
