import Image from "next/image";
import { Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 ml-2">
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

export default function ReviewsCard({ data }: any) {
  return (
    <div className="rounded-3xl overflow-hidden bg-accent shadow-sm flex flex-col">
      {/* Top info section */}
      <div className="flex items-start justify-between p-4 md:p-5 h-2/5">
        <div className="flex flex-col gap-3 justify-between pr-3">
          <div>
            <h3 className="font-bold text-lg md:text-2xl">{data.title}</h3>
            <p className="text-base text-foreground/60 mt-1 leading-snug h-12">
              {data.text}
            </p>
          </div>
          <StarRating rating={data.rating} />
        </div>

        {/* Avatar */}
        <div className="shrink-0">
          <Image
            src={data.avatar}
            alt="reviewer"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Product image */}
      <div className="w-full flex-1 min-h-[200px] md:min-h-[340px] relative">
        <Image
          src={data.productImage}
          alt="product"
          fill
          className="object-cover h-2/5"
        />
      </div>
    </div>
  );
}
