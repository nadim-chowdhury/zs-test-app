"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useGetCategoriesQuery } from "@/services/categoryApi";
import { Skeleton } from "../ui/skeleton";

export default function CategoriesSection() {
  const { data, isLoading, isError, error, isFetching } =
    useGetCategoriesQuery();

  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 2;
  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < (data ? data.length : 0);

  const handlePrev = () => {
    if (canPrev) setStartIndex((i) => i - 2);
  };

  const handleNext = () => {
    if (canNext) setStartIndex((i) => i + 2);
  };

  const visible = data?.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-foreground/90 pt-10 pb-2 md:pt-24 md:pb-0 my-14 md:mt-28">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10 container mx-auto px-4">
          <h2 className="uppercase font-bold text-3xl md:text-5xl text-background md:mb-8">
            Categories
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              className="w-8 h-8 rounded-lg border border-background/30 flex items-center justify-center transition-colors bg-background text-foreground hover:bg-background/90 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext}
              className="w-8 h-8 rounded-lg border border-background/30 flex items-center justify-center bg-background text-foreground transition-colors hover:bg-background/90 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards container */}
        <div className="overflow-hidden m-4 md:m-0 md:ml-20">
          <div className="grid md:grid-cols-2">
            {isLoading || !data || isFetching ? (
              <>
                <Skeleton className="min-h-[280px] md:min-h-[620px] rounded-tl-2xl md:rounded-tl-[4rem] rounded-bl-none rounded-r-none bg-muted" />
                <Skeleton className="min-h-[280px] md:min-h-[620px] bg-accent rounded-none" />
              </>
            ) : (
              visible?.map((cat, idx) => (
                <div
                  key={cat?.id}
                  className={`relative flex flex-col justify-between p-4 md:p-8 pt-6 md:pt-10 min-h-[280px] md:min-h-[620px] overflow-hidden group transition-colors duration-500 ${
                    idx % 2 === 1
                      ? "bg-accent"
                      : "bg-muted rounded-tl-2xl md:rounded-tl-[4rem] rounded-bl-none"
                  }`}
                >
                  {/* Animated Hover Layer */}
                  <div className="absolute inset-0 w-full h-full bg-foreground/25 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                  {/* Content Wrapper (Must be relative and z-10 to stay above the sliding color) */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Shoe image */}
                    <div className="flex items-center justify-center flex-1">
                      <SafeImage
                        src={cat?.image}
                        alt={cat?.name}
                        width={400}
                        height={280}
                        className="object-cover md:w-1/2 max-h-[200px] md:max-h-[480px] drop-shadow-xl"
                      />
                    </div>

                    {/* Bottom row: label + arrow button */}
                    <div className="flex items-end justify-between mx-4 mt-4 md:mt-6">
                      <h3 className="font-bold text-xl md:text-4xl uppercase leading-tight whitespace-pre-line group-hover:text-foreground transition-colors duration-500">
                        {cat?.name}
                      </h3>
                      <button className="w-8 h-8 md:w-10 md:h-10 bg-foreground group-hover:bg-foreground rounded flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-background group-hover:text-background" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const SafeImage = ({ src, alt, ...props }: any) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc || "/assets/category_1.png"}
      alt={alt}
      // If the URL is broken/404, this triggers:
      onError={() => setImgSrc("/assets/category_1.png")}
    />
  );
};
