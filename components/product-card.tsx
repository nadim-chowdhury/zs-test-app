import Image from "next/image";
import { Button } from "./ui/button";

export default function ProductCard({ data }: any) {
  return (
    <div className="w-full relative">
      <Image
        src="/assets/banner_1.jpg"
        alt="banner_1"
        width={160}
        height={160}
        className="w-full md:h-full object-cover rounded-[30px] bg-white p-2"
      />

      <span className="absolute top-2 left-2 bg-primary text-white px-4 py-2 rounded-tl-3xl rounded-br-3xl">
        New
      </span>

      <h3 className="my-2 md:my-4 md:text-2xl font-bold uppercase">
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
      </h3>

      <Button className="w-full bg-foreground uppercase md:h-12">
        View Product - <span className="text-amber-500">$125</span>
      </Button>
    </div>
  );
}
