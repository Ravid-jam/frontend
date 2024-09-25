"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { isMacOs } from "../lib/utils";
import { Kbd } from "./kbd";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import { Icons } from "../components/ui/icons";
import CartDrawers from "./CartDrawers";
import { Button } from "@/components/ui/button";
import MainMobileNav from "./MainMobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="sticky bg-[#E40046] top-0 z-50 w-full border-b px-3 sm:px-5">
      <div className="h-16 flex justify-between items-center">
        <div className="flex-1">
          <Navbar />
          <div className="lg:hidden block">
            <Button
              size="icon"
              className="!bg-white text-black"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <div>
                <Button
                  variant="outline"
                  className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
                  onClick={() => setOpen(true)}
                >
                  <MagnifyingGlassIcon
                    className="size-4 xl:mr-2"
                    aria-hidden="true"
                  />
                  <span className="hidden xl:inline-flex">
                    Search products...
                  </span>
                  <span className="sr-only">Search products</span>
                  <Kbd
                    title={isMacOs() ? "Command" : "Control"}
                    className="pointer-events-none absolute right-1.5 top-1.5 hidden xl:block"
                  >
                    {isMacOs() ? "⌘" : "Ctrl"} K
                  </Kbd>
                </Button>
              </div>
              <div>
                <Button
                  aria-label="Open cart"
                  variant="outline"
                  size="icon"
                  className="relative"
                  onClick={() => setOpenCart(!openCart)}
                >
                  <Icons.cart className="size-4" aria-hidden="true" />
                </Button>
              </div>
              <div>
                <Button size="lg" className="!bg-white text-black">
                  SignIn
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Searchbar open={open} handleOpen={() => setOpen(!open)} />
      <CartDrawers open={openCart} handleOpen={() => setOpenCart(!openCart)} />
      <MainMobileNav
        open={openMobileMenu}
        handleOpen={() => setOpenMobileMenu(!openMobileMenu)}
      />
    </header>
  );
}
