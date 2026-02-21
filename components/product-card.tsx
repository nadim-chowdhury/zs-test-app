import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductCard({ item, idx }: any) {
  return (
    <div className="w-full relative flex flex-col justify-between">
      <Image
        src={item?.images[0]}
        alt="banner_1"
        width={160}
        height={160}
        className="w-full h-2/3 object-cover rounded-[30px] bg-white p-2"
      />

      <span
        className={`absolute top-2 left-2 ${idx === 2 ? "bg-amber-500 text-foreground" : "bg-primary text-white"} px-4 py-2 rounded-tl-3xl rounded-br-3xl font-medium`}
      >
        {idx === 2 ? "10% off" : "New"}
      </span>

      <div className="h-full flex flex-col justify-between">
        <h3 className="my-2 md:my-4 md:text-2xl font-bold uppercase">
          {item?.title}
        </h3>

        <Link href={`/product?${item?.slug}&uid=${item?.id}`}>
          <Button className="w-full bg-foreground uppercase md:h-12 text-xs md:text-base">
            View Product -{" "}
            <span className="text-amber-500">${item?.price}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
