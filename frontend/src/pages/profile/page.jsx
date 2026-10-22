import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import {
  LuClock,
  LuCircleAlert,
  LuCircleCheck,
  LuLogOut,
} from "react-icons/lu";
import Loading from "../loading/page";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function Profile() {
  const { logout } = authServices();
  const { getUserOrders, orderLoading, refetchOrders, ordersList } =
    orderServices();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (!authData) {
      return navigate("/auth");
    } else if (refetchOrders) {
      getUserOrders(authData?.user?._id);
    }
  }, [authData, refetchOrders]);

  if (orderLoading) {
    return <Loading />;
  }

  const handleLoguot = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col p-2! gap-4! max-w-300 w-full">
      <Card className="p-4! bg-background/15">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4!">
            <img
              src="../imgs/user.png"
              alt=""
              className="w-14 h-14 rounded-full border-2 border-background"
            />
            <div>
              <p className="text-background text-xl md:text-2xl">
                {authData?.user?.fullname}
              </p>
              <p className="text-background text-md md:text-lg">
                {authData?.user?.email}
              </p>
            </div>
          </div>
          <Button className="w-20" onClick={handleLoguot}>
            Sair <LuLogOut />
          </Button>
        </div>
      </Card>
      {ordersList.length > 0 ? (
        <p className="text-xl mt-2! lg:mt-4!">Suas Ordens:</p>
      ) : null}
      {ordersList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2!">
          {ordersList.map((order) => (
            <Card>
              <CardContent>
                <div
                  key={order.id}
                  className="flex flex-col gap-2! bg-black text-white p-4!"
                >
                  {order.pickupStatus === "Pending" ? (
                    <Badge className="gap-2! p-2! rounded-lg bg-yellow-400 ">
                      <LuClock />
                      Pendente
                    </Badge>
                  ) : null}
                  {order.pickupStatus === "Completed" ? (
                    <Badge className="gap-2! p-2! rounded-lg bg-green-400">
                      <LuCircleCheck />
                      Completada
                    </Badge>
                  ) : null}
                  {order.pickupStatus === "Canceled" ? (
                    <Badge className="gap-2! p-2! rounded-lg bg-red-400">
                      <LuCircleAlert />
                      Cancelada
                    </Badge>
                  ) : null}
                  <p className="text-sm">{order.pickupTime}</p>
                  {order.orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between gap-1!"
                    >
                      <h4 className="text-yellow-100 text-xl">
                        {item.itemDetails[0].name}
                      </h4>
                      <p className="text-yellow-400 text-2xl">
                        R$ {item.itemDetails[0].price}
                      </p>
                      <p className="text-sm">Quantidade: {item.quantity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-8! gap-8!">
          <h1 className="text-2xl text-center">
            {" "}
            Você ainda não tem nenhuma ordem!
          </h1>
          <Button onClick={() => navigate("/plates")} className="w-60">
            Clique aqui para ver nossos pratos
          </Button>
        </div>
      )}
    </div>
  );
}
