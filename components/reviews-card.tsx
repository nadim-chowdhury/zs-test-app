import Image from "next/image";
import { Star } from "lucide-react";

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mt-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="w-4 h-4"
          fill={star <= Math.floor(rating) ? "#f59e0b" : "none"}
          stroke={star <= Math.ceil(rating) ? "#f59e0b" : "#d1d5db"}
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-foreground/70">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function ReviewsCard({ data }: { data?: number }) {
  const review = reviews[(data ?? 1) - 1] ?? reviews[0];

  return (
    <div className="rounded-3xl overflow-hidden bg-accent shadow-sm flex flex-col">
      {/* Top info section */}
      <div className="flex items-start justify-between p-4 md:p-5">
        <div className="flex-1 pr-3">
          <h3 className="font-bold text-lg md:text-2xl">{review.title}</h3>
          <p className="text-base text-foreground/60 mt-1 leading-snug">
            {review.text}
          </p>
          <StarRating rating={review.rating} />
        </div>

        {/* Avatar */}
        <div className="shrink-0">
          <Image
            src={review.avatar}
            alt="reviewer"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
          />
        </div>
      </div>

      {/* Product image */}
      <div className="w-full flex-1 min-h-[200px] md:min-h-[240px] relative">
        <Image
          src={review.productImage}
          alt="product"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
