import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import { LuClock, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
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
    <div className="flex flex-col p-2! gap-2!">
      <div>
        <h1>{authData?.user?.fullname}</h1>
        <p>{authData?.user?.email}</p>
      </div>
      <Button onClick={handleLoguot}>Sair</Button>
      {ordersList.length > 0 ? (
        <div className="grid grid-cols-2 gap-2!">
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
                      {order.pickupStatus}
                    </Badge>
                  ) : null}
                  {order.pickupStatus === "Completed" ? (
                    <Badge className="gap-2! p-2! rounded-lg bg-green-400">
                      <LuCircleCheck />
                      {order.pickupStatus}
                    </Badge>
                  ) : null}
                  {order.pickupStatus === "Canceled" ? (
                    <Badge className="gap-2! p-2! rounded-lg bg-red-400">
                      <LuCircleAlert />
                      {order.pickupStatus}
                    </Badge>
                  ) : null}
                  <p>{order.pickupTime}</p>
                  {order.orderItems.map((item) => (
                    <div key={item.id}>
                      <h4>{item.itemDetails[0].name}</h4>
                      <p>{item.itemDetails[0].price}</p>
                      <p>Quantidade: {item.quantity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          Você ainda não tem nenhuma ordem!
          <Link to={"/plates"} className="color-black underline">
            Clique aqui para ver nossos pratos.
          </Link>
        </div>
      )}
    </div>
  );
}
