import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
  return (
    <header className="relative w-full">
      <nav className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-between container mx-auto bg-accent px-10 py-6 rounded-3xl shadow-sm">
        {/* LEFT NAV */}
        <NavigationMenu>
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
                <ul className="grid w-48 gap-2 p-4">
                  {menShoes.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
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
                <ul className="grid w-48 gap-2 p-4">
                  {womenShoes.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
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

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/assets/logo_dark.png"
            alt="KICKS"
            width={120}
            height={32}
            priority
          />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-8">
          <Button variant="ghost" size="icon" className="">
            <Search className="w-6 h-6" strokeWidth={3} />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="w-6 h-6" strokeWidth={3} />
          </Button>

          <Button className="h-9 w-9 rounded-full bg-orange-500 text-white hover:bg-orange-500">
            0
          </Button>
        </div>
      </nav>
    </header>
  );
}
