import { Card, CardContent } from "./ui/card";

export default function PlateCard({ plateData, onClick }) {
  return (
    <Card>
      <CardContent>
        <div
          className="flex flex-col items-center justify-end w-90 h-110 relative cardContainer"
          onClick={onClick}
        >
          <img
            src={plateData.imgUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col absolute w-[90%] p-4!">
            <h4 className="font-semibold text-lg mb-4!">{plateData.name}</h4>
            <h3 className="text-right font-bold text-xl text-amber-400">R$ {plateData.price}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
