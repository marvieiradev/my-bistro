import { LuShoppingCart, LuUserRound, LuMenu } from "react-icons/lu";
//import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center bg-black h-24 p-2 justify-center">
      <div className="hidden md:flex justify-between items-center w-full max-w-300">
        <Link to="/">
          <img src="../imgs/logo.png" alt="Logo" className="w-12" />
        </Link>

        <div className="flex justify-center items-center gap-8! p-2 text-white">
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

      <div className="flex w-full md:hidden justify-between items-center gap-2 font-2xl text-white pt-0! pb-0! pr-6! pl-6!">
        <img src="../imgs/logo.png" alt="Logo" className="w-12" />
        <div className="flex justify-center items-center gap-2 font-2xl">
          <LuShoppingCart />
          <Drawer swipeDirection="right" className="text-lg">
            <DrawerTrigger
              render={<LuMenu className="text-white" />}
            ></DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col p-4! h-full justify-center bg-black text-2xl text-white">
                <div className="flex flex-col w-full justify-center p-2 gap-8! decoration-none bg-transparent">
                  <DrawerClose>
                    <Link to="/" onClick={handleOpenMenu}>
                      Início
                    </Link>
                  </DrawerClose>
                  <DrawerClose>
                    <Link to="/plates" onClick={handleOpenMenu}>
                      Pratos
                    </Link>
                  </DrawerClose>
                  <DrawerClose>
                    <Link to="/profile" onClick={handleOpenMenu}>
                      Perfil
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
