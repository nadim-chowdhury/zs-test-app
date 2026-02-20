"use client";

import { Button } from "../ui/button";
import ProductCard from "../product-card";
import { useGetProductsQuery } from "@/services/productApi";
import { Skeleton } from "../ui/skeleton";

export default function NewDropsSection() {
  const { data, isLoading, isError, error, isFetching } = useGetProductsQuery();
  console.log("🚀 ~ isLoading:", isLoading);

  return (
    <section className="container mx-auto my-14 md:my-28 px-4 md:px-0">
      <div className="flex items-end justify-between">
        <h1 className="uppercase font-bold text-xl md:text-7xl">
          Don&apos;t miss out <br />
          new drops
        </h1>

        <Button className="uppercase bg-primary h-9 md:h-12">
          Shop New Drops
        </Button>
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
          data
            ?.slice(0, 4)
            .map((item, idx) => <ProductCard key={idx} item={item} idx={idx} />)
        )}
      </div>
    </section>
  );
}
