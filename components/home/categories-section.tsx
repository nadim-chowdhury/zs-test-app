"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    label: "LIFESTYLE\nSHOES",
    image: "/assets/banner_2.jpg",
  },
  {
    id: 2,
    label: "BASKETBALL\nSHOES",
    image: "/assets/banner_3.jpg",
  },
  {
    id: 3,
    label: "RUNNING\nSHOES",
    image: "/assets/banner_1.jpg",
  },
  {
    id: 4,
    label: "TRAINING\nSHOES",
    image: "/assets/banner_2.jpg",
  },
];

export default function CategoriesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 2;
  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < categories.length;

  const handlePrev = () => {
    if (canPrev) setStartIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (canNext) setStartIndex((i) => i + 1);
  };

  const visible = categories.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-foreground/90 pt-10 pb-2 md:pt-24 md:pb-0 my-14 md:mt-72">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10 container mx-auto px-4 md:px-0">
          <h2 className="uppercase font-bold text-3xl md:text-5xl text-background md:mb-8">
            Categories
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              className="w-8 h-8 rounded-lg border border-background/30 flex items-center justify-center transition-colors bg-background text-foreground hover:bg-background/10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext}
              className="w-8 h-8 rounded-lg border border-background/30 flex items-center justify-center bg-background text-foreground transition-colors hover:bg-background/10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards container */}
        <div className="overflow-hidden m-4 md:m-0 md:ml-20">
          <div className="grid md:grid-cols-2">
            {visible.map((cat, idx) => (
              <div
                key={cat.id}
                className={`relative flex flex-col justify-between p-4 md:p-8 pt-6 md:pt-10 min-h-[280px] md:min-h-[620px] ${
                  idx % 2 === 1
                    ? "bg-accent"
                    : "bg-muted rounded-tl-2xl md:rounded-tl-[4rem]"
                }`}
              >
                {/* Shoe image */}
                <div className="flex items-center justify-center flex-1">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    width={400}
                    height={280}
                    className="object-contain w-full max-h-[200px] md:max-h-[480px] drop-shadow-xl"
                  />
                </div>

                {/* Bottom row: label + arrow button */}
                <div className="flex items-end justify-between mx-4 mt-4 md:mt-6">
                  <h3 className="font-bold text-lg md:text-4xl uppercase leading-tight whitespace-pre-line">
                    {cat.label}
                  </h3>
                  <button className="w-10 h-10 md:w-14 md:h-14 bg-foreground rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-background" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
