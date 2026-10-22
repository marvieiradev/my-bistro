import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/useCartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main className="flex flex-col items-center bg-foreground text-background min-h-screen h-full">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
