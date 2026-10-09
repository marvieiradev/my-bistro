import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import styles from "./page.module.css";
import {
  LuLogOut,
  LuClock,
  LuCircleAlert,
  LuCircleCheck,
} from "react-icons/lu";
import Loading from "../loading/page";

export default function Profile() {
  const { logout } = authServices();
  const { getUserOrders, orderLoading, refetchOrders, ordersList } =
    orderServices;
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
    return <Loading/>;
  }

  const handleLoguot = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <div>
        {" "}
        <h1>{authData?.user?.fullname}</h1>
        <p>{authData?.user?.email}</p>
      </div>
      <button onClick={handleLoguot}>Sair</button>
      {ordersList?.lenght > 0 ? (
        <div className={styles.ordersContainer}>
          {ordersList.map((order) => (
            <div key={order.id} className={styles.orderContainer}>
              {order.pickupStatus === "Pending" ? (
                <p className={`${styles.pickupStatus} ${styles.pending}`}>
                  <LuClock />
                  {order.pickupStatus}
                </p>
              ) : null}
              {order.pickupStatus === "Completed" ? (
                <p className={`${styles.pickupStatus} ${styles.completed}`}>
                  <LuCircleCheck />
                  {order.pickupStatus}
                </p>
              ) : null}
              {order.pickupStatus === "Canceled" ? (
                <p className={`${styles.pickupStatus} ${styles.canceled}`}>
                  <LuCircleAlert />
                  {order.pickupStatus}
                </p>
              ) : null}
              <p>{order.pickupTime}</p>
              {order.orderItems.map((item) => (
                <div key={item.id}>
                  <h4>{item.itemDetails.name}</h4>
                  <p>{item.itemDetails.price}</p>
                  <p>Quantidade: {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          Você ainda não tem nenhuma ordem!
          <Link to={"/plates"} className={styles.platesLink}> Clique aqui para ver nossos pratos.</Link>
        </div>
      )}
    </div>
  );
}
