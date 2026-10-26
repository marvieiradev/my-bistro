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

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center bg-background h-20 p-2 justify-center">
      <div className="hidden md:flex justify-between items-center w-full max-w-300">
        <Link to="/">
          <img src="../imgs/logo.png" alt="Logo" className="w-12" />
        </Link>

        <div className="flex justify-center items-center gap-8! p-2 text-foreground">
          <Link to="/">Início</Link>
          <Link to="/plates">Pratos</Link>
          <Link to="/cart">
            <LuShoppingCart />
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
            <LuShoppingCart />
          </Link>
          <Drawer swipeDirection="up" className="text-sm ">
            <DrawerTrigger
              render={<LuMenu className="text-foreground" />}
            ></DrawerTrigger>
            <DrawerContent className="mt-1!">
              <DrawerClose>
                <div className="flex justify-end w-full p-2! pr-4! text-xl">
                  <LuX />
                </div>
              </DrawerClose>
              <div className="flex flex-col p-4! h-full justify-center bg-background text-lg">
                <div className="flex flex-col w-full justify-center items-center p-2 gap-4! decoration-none">
                  <DrawerClose>
                    <Link to="/" onClick={handleOpenMenu}>
                      <div className="flex justify-center items-center gap-4 w-50 border border-foreground rounded-full p-1!">
                        <LuHouse />
                        Início
                      </div>
                    </Link>
                  </DrawerClose>

                  <DrawerClose>
                    <Link to="/plates" onClick={handleOpenMenu}>
                      <div className="flex justify-center items-center gap-4 w-50 border border-foreground rounded-full p-1!">
                        <LuSalad />
                        Pratos
                      </div>
                    </Link>
                  </DrawerClose>
                  
                  <DrawerClose>
                    <Link to="/profile" onClick={handleOpenMenu}>
                      <div className="flex justify-center items-center gap-4 w-50 border border-foreground rounded-full p-1!">
                        <LuUserRound />
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
