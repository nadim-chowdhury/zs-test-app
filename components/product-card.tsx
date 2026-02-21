"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCard({ item, idx }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = item?.images || ["/assets/placeholder.png"];

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full relative flex flex-col justify-between group">
      {/* Image Slider Container */}
      <div className="relative w-full overflow-hidden rounded-[30px] bg-white p-2 h-2/3">
        <Image
          src={images[currentImageIndex] || "/assets/placeholder.png"}
          alt={item?.title || "product"}
          // fill // Using fill for better responsiveness in a slider
          width={480}
          height={480}
          className="object-cover rounded-[25px] transition-opacity duration-300 h-full group-hover:shadow-2xl"
          onError={(e) => {
            // Optional: fallback if image link is broken
            (e.target as any).src = "/assets/placeholder.png";
          }}
        />

        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevSlide}
              className="bg-white/80 p-1 rounded-full shadow-md hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 p-1 rounded-full shadow-md hover:bg-white"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_: any, i: number) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  currentImageIndex === i ? "bg-primary w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* Badge */}
        <span
          className={`absolute top-2 left-2 z-10 ${
            idx === 2 ? "bg-amber-500 text-foreground" : "bg-primary text-white"
          } px-4 py-2 rounded-tl-3xl rounded-br-3xl font-medium text-xs md:text-sm`}
        >
          {idx === 2 ? "10% off" : "New"}
        </span>
      </div>

      {/* Product Info */}
      <div className="h-1/3 flex flex-col justify-between">
        <h3 className="my-2 md:my-4 text-lg md:text-2xl font-bold uppercase">
          {item?.title}
        </h3>

        <Link href={`/product?slug=${item?.slug}&uid=${item?.id}`}>
          <Button className="w-full bg-foreground uppercase md:h-12 text-xs md:text-base">
            View Product -{" "}
            <span className="ml-1 text-amber-500">${item?.price}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
