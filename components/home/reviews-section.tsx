"use client";

import { Button } from "../ui/button";
import ReviewsCard from "../reviews-card";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      title: "Good Quality",
      text: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: "/assets/banner_2.jpg",
      productImage: "/assets/banner_1.jpg",
    },
    {
      id: 2,
      title: "Amazing Fit",
      text: "Best sneakers I have ever bought, super comfy",
      rating: 4.5,
      avatar: "/assets/banner_3.jpg",
      productImage: "/assets/banner_2.jpg",
    },
    {
      id: 3,
      title: "Love It!",
      text: "Fast delivery and exactly as described",
      rating: 5.0,
      avatar: "/assets/banner_1.jpg",
      productImage: "/assets/banner_3.jpg",
    },
  ];

  const isMobile = useIsMobile();

  return (
    <section className="container mx-auto my-14 md:my-20 px-4 md:px-0">
      <div className="flex items-end justify-between">
        <h1 className="uppercase font-bold text-3xl md:text-7xl">Reviews</h1>

        <Button className="uppercase bg-primary h-9 md:h-12 md:px-8">
          See all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-12">
        {(isMobile ? reviews.slice(0, 1) : reviews).map((item, idx) => (
          <ReviewsCard key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
