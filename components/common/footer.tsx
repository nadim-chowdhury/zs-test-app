"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const categories = [
  { label: "Runners", href: "/category/runners" },
  { label: "Sneakers", href: "/category/sneakers" },
  { label: "Basketball", href: "/category/basketball" },
  { label: "Outdoor", href: "/category/outdoor" },
  { label: "Golf", href: "/category/golf" },
  { label: "Hiking", href: "/category/hiking" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  // TikTok – using SVG inline since lucide doesn't have it
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="container mx-auto px-4 md:px-0">
      {/* ── Newsletter Banner ── */}
      <div className="bg-primary rounded-t-3xl md:rounded-t-[48px] px-6 md:px-16 py-10 md:py-28">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left copy */}
          <div className="w-full whitespace-nowrap">
            <h2 className="text-white font-extrabold text-2xl md:text-5xl uppercase leading-tight max-w-xs">
              Join our KicksPlus <br /> Club &amp; get 15% off
            </h2>
            <p className="text-white/70 mt-2 text-sm md:text-base">
              Sign up for free! Join the community.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 mt-5 max-w-sm"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 text-white placeholder:text-white text-sm px-4 py-3 rounded-l-lg outline-none min-w-0 border border-white h-10"
              />
              <Button
                type="submit"
                className="bg-foreground text-background text-sm font-bold uppercase px-5 py-3 rounded-r-lg hover:opacity-80 transition-opacity shrink-0 h-10"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right: KICKS logo */}
          <div className="shrink-0 relative">
            <Image
              src="/assets/logo_light.png"
              alt="KICKS"
              width={220}
              height={64}
              className="w-36 md:w-56 brightness-0 invert"
            />

            <span className="absolute -top-4 -right-4 bg-amber-500 p-2 rounded-full flex items-center justify-center w-6 h-6 text-md font-medium text-primary">
              +
            </span>
          </div>
        </div>
      </div>

      {/* ── Dark Nav Section ── */}
      <div className="bg-foreground px-6 md:px-16 pt-12 pb-0 mb-12 rounded-b-[48px]">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12">
          {/* About us */}
          <div className="col-span-2 ">
            <h4 className="text-amber-500 font-bold text-lg md:text-xl mb-3">
              About us
            </h4>
            <p className="text-background/80 text-sm leading-relaxed font-medium">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-amber-500 font-bold text-lg md:text-xl mb-3">
              Categories
            </h4>
            <ul className="flex flex-col gap-2">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-amber-500 font-bold text-lg md:text-xl mb-3">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-amber-500 font-bold text-lg md:text-xl mb-3">
              Follow us
            </h4>
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-background" />
                </Link>
              ))}
              {/* TikTok */}
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-background"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Giant KICKS watermark ── */}
        <div className="overflow-hidden flex items-center justify-center mt-8">
          <Image
            src="/assets/logo_half.png"
            alt="KICKS"
            width={1280}
            height={720}
            className="w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
