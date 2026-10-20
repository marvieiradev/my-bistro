import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/useCartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
