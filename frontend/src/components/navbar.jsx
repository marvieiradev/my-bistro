import {
  LuShoppingCart,
  LuUserRound,
  LuMenu,
  LuX,
  LuSalad,
  LuHouse,
} from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useCartContext } from "../contexts/useCartContext";
import { Badge } from "./ui/badge";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const numOrders = useCartContext().cartItems.length;

  console.log(numOrders);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center bg-background h-20 p-2 justify-center">
      <div className="hidden md:flex justify-between items-center w-full max-w-300">
        <Link to="/">
          <img src="../imgs/logo.png" alt="Logo" className="w-12" />
        </Link>

        <div className="flex justify-center items-center gap-8! p-2 text-foreground text-lg">
          <Link to="/">Início</Link>
          <Link to="/plates">Pratos</Link>
          <Link to="/cart">
            <div className="relative">
              <LuShoppingCart />
              {numOrders >= 1 ? (
                <Badge className="bg-amber-300 w-5 h-5 absolute -top-3 -right-3 z-10">
                  {numOrders}
                </Badge>
              ) : null}
            </div>
          </Link>
          <Link to="/profile">
            <LuUserRound />
          </Link>
        </div>
      </div>

      <div className="flex w-full md:hidden justify-between items-center gap-2 text-lg text-foreground pt-0! pb-0! pr-6! pl-6!">
        <img src="../imgs/logo.png" alt="Logo" className="w-12" />
        <div className="flex justify-center items-center gap-4 text-lg max-w-300">
          <Link to="/cart">
            <div className="relative">
              <LuShoppingCart className="w-7 h-7" />
              {numOrders >= 1 ? (
                <Badge className="bg-amber-300 w-5 h-5 absolute -top-2 -right-2 z-10">
                  {numOrders}
                </Badge>
              ) : null}
            </div>
          </Link>
          <Drawer swipeDirection="up" className="text-sm ">
            <DrawerTrigger
              render={<LuMenu className="text-foreground w-7 h-7" />}
            ></DrawerTrigger>
            <DrawerContent className="mt-1!">
              <DrawerClose>
                <div className="flex justify-end w-full p-2! pr-4! text-xl">
                  <LuX />
                </div>
              </DrawerClose>
              <div className="flex flex-col p-4! h-full justify-center bg-background text-2xl">
                <div className="flex flex-col w-full justify-center items-center p-2 gap-4! decoration-none">
                  <DrawerClose>
                    <Link to="/" onClick={handleOpenMenu}>
                      <div className="flex justify-center items-center gap-4 w-60 border border-foreground rounded-full p-1!">
                        <LuHouse className="w-7 h-7" />
                        Início
                      </div>
                    </Link>
                  </DrawerClose>

                  <DrawerClose>
                    <Link to="/plates" onClick={handleOpenMenu}>
                      <div className="flex justify-center items-center gap-4 w-60 border border-foreground rounded-full p-1!">
                        <LuSalad className="w-7 h-7" />
                        Pratos
                      </div>
                    </Link>
                  </DrawerClose>

                  <DrawerClose>
                    <Link to="/profile" onClick={handleOpenMenu}>
                      <div className="flex justify-center items-center gap-4 w-60 border border-foreground rounded-full p-1!">
                        <LuUserRound className="w-7 h-7" />
                        Perfil
                      </div>
                    </Link>
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
