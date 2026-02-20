"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search, User, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";

const menShoes = [
  { name: "Sneakers", href: "/men/sneakers" },
  { name: "Running", href: "/men/running" },
  { name: "Basketball", href: "/men/basketball" },
  { name: "Casual", href: "/men/casual" },
  { name: "Formal", href: "/men/formal" },
];

const womenShoes = [
  { name: "Sneakers", href: "/women/sneakers" },
  { name: "Heels", href: "/women/heels" },
  { name: "Flats", href: "/women/flats" },
  { name: "Sports", href: "/women/sports" },
  { name: "Sandals", href: "/women/sandals" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full pt-4 md:pt-8 px-4 md:px-0 sticky top-2 md:top-4 z-50">
      <nav className="flex items-center justify-between container mx-auto bg-accent px-4 py-2 md:px-8 md:py-6 rounded-xl md:rounded-3xl shadow-sm">
        {/* LEFT NAV */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} bg-transparent font-bold`}
              >
                <Link href="/">New Drops 🔥</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* MEN DROPDOWN */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-bold">
                Men
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-3 w-96 gap-2 p-4">
                  {menShoes.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* WOMEN DROPDOWN */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-bold">
                Women
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-3 w-96 gap-2 p-4">
                  {womenShoes.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE VIEW MENU */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-muted"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6" strokeWidth={3} />
        </Button>

        {/* LOGO */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            src="/assets/logo_dark.png"
            alt="KICKS"
            width={96}
            height={28}
            className="sm:w-[120px]"
            priority
          />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-8">
          {/* <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="w-6 h-6" strokeWidth={3} />
          </Button> */}

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-muted"
              >
                <Search className="w-6 h-6" strokeWidth={3} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <Input placeholder="Search here" />
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="icon" className="hover:bg-muted">
            <User className="w-6 h-6" strokeWidth={3} />
          </Button>

          <Button className="w-9 rounded-full bg-orange-500 text-white hover:bg-orange-500">
            0
          </Button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] z-50 rounded-2xl bg-accent p-6 shadow-md lg:hidden">
          <div className="flex flex-col gap-4 font-bold">
            <Link href="/">New Drops 🔥</Link>

            <div>
              <p className="mb-2">Men</p>
              {menShoes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div>
              <p className="mb-2">Women</p>
              {womenShoes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
