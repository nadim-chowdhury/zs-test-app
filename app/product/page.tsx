"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import YouMayLike from "@/components/you-may-like";
import { useGetProductByIdQuery } from "@/services/productApi";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "white",
];

const sizes = [
  { value: "28", disabled: false },
  { value: "29", disabled: true },
  { value: "30", disabled: true },
  { value: "31", disabled: false },
  { value: "32", disabled: false },
  { value: "33", disabled: false },
  { value: "34", disabled: false },
];

export function ProductContent() {
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const id = Number(uid);

  const { data, isLoading, isError, isFetching } = useGetProductByIdQuery(id, {
    skip: Number.isNaN(id),
  });

  const [selectedColor, setSelectedColor] = useState<string>("red");
  const [selectedSize, setSelectedSize] = useState<string>("28");
  const [selectedImage, setSelectedImage] = useState<string>(
    data?.images[0] ||
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  );

  useEffect(() => {
    if (data && !isLoading) setSelectedImage(data?.images[0]);
  }, [data]);

  return (
    <section className="container mx-auto my-14 md:my-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading || isFetching || !data ? (
          <>
            {/* Desktop image skeleton */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 md:col-span-2">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  className={`w-full h-[260px] bg-muted ${["rounded-tl-4xl", "rounded-tr-4xl", "rounded-bl-4xl", "rounded-br-4xl"][idx] || ""}`}
                />
              ))}
            </div>

            {/* Mobile image skeleton */}
            <div className="md:hidden">
              {/* Main image */}
              <Skeleton className="w-full min-h-[360px] rounded-4xl bg-muted" />

              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton
                    key={idx}
                    className="w-full h-[80px] rounded-lg bg-muted"
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Desktop image view */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 md:col-span-2">
              {data?.images?.map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  alt="banner_1"
                  width={160}
                  height={160}
                  className={`w-full h-full object-cover bg-white ${idx === 0 && "rounded-tl-4xl"} ${idx === 1 && "rounded-tr-4xl"} ${idx === 2 && "rounded-bl-4xl"} ${idx === 3 && "rounded-br-4xl"}`}
                />
              ))}
            </div>
            {/* Mobile image view */}
            <div className="md:hidden">
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt="banner_1"
                  width={360}
                  height={360}
                  className="w-full h-full min-h-[360px] object-cover bg-white rounded-4xl"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {data?.images?.map((item, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full transition ${selectedImage === item ? "bg-white" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {data?.images?.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt="banner_1"
                    width={160}
                    height={160}
                    className={`object-cover bg-white rounded-lg cursor-pointer hover:opacity-80 transition`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          <div>
            <Button className="h-9">New Release</Button>
          </div>

          <h2 className="text-3xl font-bold">{data?.title}</h2>
          <h3 className="text-xl font-bold text-primary">
            ${data?.price?.toFixed(2)}
          </h3>

          {/* Color */}
          <div className="mt-4">
            <h4 className="uppercase font-semibold mb-3">Color</h4>

            <div className="grid grid-cols-9 gap-4">
              {colors.map((color, idx) => {
                const isSelected = selectedColor === color;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition"
                    style={{
                      boxShadow: isSelected
                        ? `0 0 0 2px ${color}`
                        : "0 0 0 2px transparent",
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-full block"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Size */}
          <div className="mt-4">
            <h4 className="uppercase font-semibold mb-3">Size</h4>

            <div className="grid grid-cols-6 md:grid-cols-8 gap-4">
              {sizes.map((size, idx) => {
                const isSelected = selectedSize === size.value;

                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center cursor-pointer transition"
                  >
                    <Button
                      className="block bg-white text-black hover:text-white"
                      disabled={size.disabled}
                      onClick={() => setSelectedSize(size.value)}
                      style={{
                        backgroundColor: isSelected ? "black" : "",
                        color: isSelected ? "white" : "",
                      }}
                    >
                      {size.value}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full mt-6">
            <div className="flex items-center gap-2 w-full">
              <Button className="flex-1 bg-foreground uppercase text-xs md:text-base">
                Add To Cart
              </Button>

              <Button className="bg-black shrink-0">
                <Heart />
              </Button>
            </div>

            <Button className="w-full uppercase text-xs md:text-base mt-2 bg-primary">
              Buy it now
            </Button>
          </div>

          <div className="mt-6">
            <h4 className="uppercase font-semibold mb-3">About the product</h4>
            <p className="text-sm text-gray-600">{data?.description}</p>
          </div>
        </div>
      </div>

      <YouMayLike />
    </section>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Skeleton className="h-screen" />
        </div>
      }
    >
      <ProductContent />
    </Suspense>
  );
}
