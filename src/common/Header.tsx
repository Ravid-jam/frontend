"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "../components/ui/icons";
import { isMacOs } from "../lib/utils";
import CartDrawers from "./CartDrawers";
import { Kbd } from "./kbd";
import MainMobileNav from "./MainMobileNav";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

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
    <React.Fragment>
      <header className="sticky top-0 z-50 w-full bg-background border-b shadow-lg">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center space-x-5">
            <div className="xl:hidden block">
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
            <div>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <MountainIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">Acme Store</span>
              </Link>
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              className="relative size-9 p-0 xl:h-10 xl:w-96 xl:justify-start xl:px-3 xl:py-2"
              onClick={() => setOpen(true)}
            >
              <MagnifyingGlassIcon
                className="size-4 xl:mr-2"
                aria-hidden="true"
              />
              <span className="hidden xl:inline-flex">Search products...</span>
              <span className="sr-only">Search products</span>
              <Kbd
                title={isMacOs() ? "Command" : "Control"}
                className="pointer-events-none absolute right-1.5 top-1.5 hidden xl:block"
              >
                {isMacOs() ? "⌘" : "Ctrl"} K
              </Kbd>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button
              aria-label="Open cart"
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setOpenCart(!openCart)}
            >
              <Icons.cart className="size-4" aria-hidden="true" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="py-1 hidden xl:flex  border-t-[1px]">
          <Navbar />
        </div>
      </header>
      <Searchbar open={open} handleOpen={() => setOpen(!open)} />
      <CartDrawers open={openCart} handleOpen={() => setOpenCart(!openCart)} />
      <MainMobileNav
        open={openMobileMenu}
        handleOpen={() => setOpenMobileMenu(!openMobileMenu)}
      />
    </React.Fragment>
  );
}
