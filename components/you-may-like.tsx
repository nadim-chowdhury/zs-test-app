"use client";

import { useGetProductsQuery } from "@/services/productApi";
import { Skeleton } from "./ui/skeleton";
import ProductCard from "./product-card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function YouMayLike() {
  const { data, isLoading, isError, error, isFetching } = useGetProductsQuery();

  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;
  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < (data ? data.length : 0);

  const handlePrev = () => {
    if (canPrev) setStartIndex((i) => i - 4);
  };

  const handleNext = () => {
    if (canNext) setStartIndex((i) => i + 4);
  };

  const visible = data?.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="container mx-auto my-14 md:my-28">
      <div className="flex items-end justify-between">
        <h1 className="font-bold text-3xl md:text-7xl">You may also like</h1>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className="w-8 h-8 rounded-lg border border-background/30 flex items-center justify-center transition-colors bg-foreground text-background hover:bg-foreground/90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className="w-8 h-8 rounded-lg border border-background/30 flex items-center justify-center bg-foreground text-background transition-colors hover:bg-foreground/90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 my-12">
        {isLoading || !data || isFetching ? (
          <>
            <Skeleton className="h-[340px]" />
            <Skeleton className="h-[340px]" />
            <Skeleton className="h-[340px]" />
            <Skeleton className="h-[340px]" />
          </>
        ) : (
          visible?.map((item, idx) => (
            <ProductCard key={idx} item={item} idx={idx} />
          ))
        )}
      </div>

      {data && data.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(data.length / visibleCount) }).map(
            (_, idx) => {
              const isActive = idx === Math.floor(startIndex / visibleCount);
              return (
                <span
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    isActive ? "w-6 bg-primary" : "w-2 bg-muted"
                  }`}
                />
              );
            },
          )}
        </div>
      )}
    </section>
  );
}
