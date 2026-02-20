"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center mb-6 md:mb-12 mt-4">
        <h1 className="uppercase font-bold text-[3.5rem] md:text-[15.75rem] md:mr-4 md:leading-80 mt-3 md:mt-0">
          Do it <span className="text-primary">Right</span>
        </h1>
      </div>

      <div
        className="h-96 md:h-[820px] bg-cover bg-center rounded-3xl md:rounded-[64px] overflow-hidden relative mx-4 md:mx-0"
        style={{ backgroundImage: "url('/assets/banner_1.jpg')" }}
      >
        <p className="rotate-270 absolute top-1/4 -left-18 md:-left-22 p-2 md:p-6 text-sm md:text-base bg-foreground text-background md:tracking-wider rounded-b-2xl">
          Nike product of the year
        </p>

        <div className="absolute bottom-4 left-4 md:bottom-16 md:left-18 md:w-[580px] z-30">
          <h2 className="font-bold text-3xl md:text-7xl text-background">
            NIKE AIR MAX
          </h2>
          <p className="md:text-2xl text-xs text-background my-2 md:my-4 font-medium">
            Nike introducing the new air max for <br />
            everyone's comfort
          </p>
          <Button className="uppercase bg-primary md:h-12 md:px-8 mt-2">
            Shop Now
          </Button>
        </div>

        <div className="absolute bottom-4 right-3 md:bottom-16 md:right-16 flex flex-col gap-2 md:gap-4 z-30">
          <Image
            src="/assets/banner_2.jpg"
            alt="banner_2"
            width={160}
            height={160}
            className="w-20 h-20 md:w-40 md:h-40 object-cover border-2 md:border-4 border-background rounded-3xl"
          />
          <Image
            src="/assets/banner_3.jpg"
            alt="banner_3"
            width={160}
            height={160}
            className="w-20 h-20 md:w-40 md:h-40 object-cover border-2 md:border-4 border-background rounded-3xl"
          />
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-linear-to-t from-foreground/60 from-5% to-transparent" />
      </div>
    </section>
  );
}
