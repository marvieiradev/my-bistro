import { Card, CardContent } from "./ui/card";

export default function PlateCard({ plateData, onClick }) {
  return (
    <Card>
      <CardContent>
        <div
          className="flex flex-col items-center justify-end w-[320px] h-105 relative cardContainer"
          onClick={onClick}
        >
          <img
            src={plateData.imgUrl}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <div className="flex flex-col gap-4 absolute w-[90%] pb-1">
            <h4>{plateData.name}</h4>
            <h3 className="text-right">$ {plateData.price}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
