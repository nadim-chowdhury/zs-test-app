import { Button } from "../ui/button";
import ReviewsCard from "../reviews-card";

export default function ReviewsSection() {
  return (
    <section className="container mx-auto my-14 md:my-20 px-4 md:px-0">
      <div className="flex items-end justify-between">
        <h1 className="uppercase font-bold text-3xl md:text-7xl">Reviews</h1>

        <Button className="uppercase bg-primary h-9 md:h-12">See all</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-12">
        {[1, 2, 3].map((item, idx) => (
          <ReviewsCard key={idx} data={item} />
        ))}
      </div>
    </section>
  );
}
