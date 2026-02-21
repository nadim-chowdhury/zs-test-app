"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import YouMayLike from "@/components/you-may-like";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  updateSize,
} from "@/store/slices/cartSlice";
import { AppDispatch } from "@/store";
import { ChevronDown, Heart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const SIZES = ["28", "30", "32", "34", "36", "38"];

export default function CartPage() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state: any) => state.cart,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [openSizeDropdown, setOpenSizeDropdown] = useState<string | null>(null);

  return (
    <section className="container mx-auto my-14 md:my-24 px-4">
      {/* Promo banner */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-2">Saving to celebrate</h3>
        <p className="text-base font-medium opacity-70">
          Enjoy up to 60% off thousands of styles during the End of Year sale —
          while supplies last. No code needed.
        </p>
        <p className="text-base font-medium opacity-70 mt-1">
          <Link href="#" className="underline">
            Join us
          </Link>{" "}
          or{" "}
          <Link href="#" className="underline">
            Sign-in
          </Link>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Your Bag */}
        <div className="flex-1 w-full lg:w-2/3 bg-accent rounded-3xl p-6">
          <h2 className="text-3xl font-bold mb-1">Your Bag</h2>
          <p className="opacity-60 mb-6">
            Items in your bag not reserved - check out now to make them yours.
          </p>

          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center opacity-50">
              <p className="text-lg font-medium">Your bag is empty.</p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-border">
              {items.map(
                (item: {
                  id: number;
                  title: string;
                  price: number;
                  images: string[];
                  category?: { name: string };
                  quantity: number;
                  selectedColor: string;
                  selectedSize: string;
                }) => (
                  <div
                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex flex-col lg:flex-row gap-4 py-5"
                  >
                    {/* Product image */}
                    <div className="shrink-0 w-48 h-48 bg-muted rounded-2xl overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col gap-2">
                      {/* Title + price row */}
                      <div className="flex flex-col lg:flex-row items-start justify-between gap-2">
                        <h3 className="font-bold uppercase text-2xl leading-tight">
                          {item.title}
                        </h3>
                        <span className="text-primary font-bold text-2xl shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Category / color */}
                      {item.category?.name && (
                        <p className="text-xl font-semibold opacity-60">
                          {item.category.name}
                        </p>
                      )}
                      <p className="text-xl font-semibold opacity-60 capitalize">
                        Color: {item.selectedColor}
                      </p>

                      {/* Size + Quantity */}
                      <div className="flex items-center gap-4 mt-1">
                        <div className="relative">
                          <button
                            onClick={() =>
                              setOpenSizeDropdown(
                                openSizeDropdown ===
                                  `${item.id}-${item.selectedColor}-${item.selectedSize}`
                                  ? null
                                  : `${item.id}-${item.selectedColor}-${item.selectedSize}`,
                              )
                            }
                            className="flex items-center gap-1 text-sm font-medium border border-border rounded-lg px-3 py-1.5 hover:bg-background/50 transition"
                          >
                            Size {item.selectedSize}
                            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                          </button>

                          {openSizeDropdown ===
                            `${item.id}-${item.selectedColor}-${item.selectedSize}` && (
                            <>
                              <div
                                className="fixed inset-0 z-10"
                                onClick={() => setOpenSizeDropdown(null)}
                              />
                              <div className="absolute top-full left-0 mt-1 z-20 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[100px]">
                                {SIZES.map((size) => (
                                  <button
                                    key={size}
                                    onClick={() => {
                                      dispatch(
                                        updateSize({
                                          id: item.id,
                                          selectedColor: item.selectedColor,
                                          oldSize: item.selectedSize,
                                          newSize: size,
                                        }),
                                      );
                                      setOpenSizeDropdown(null);
                                    }}
                                    className={`w-full text-left px-3 py-1.5 text-sm font-medium hover:bg-accent transition ${
                                      item.selectedSize === size
                                        ? "text-primary font-bold"
                                        : ""
                                    }`}
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-2 border border-border rounded-lg px-2 py-1">
                          <button
                            onClick={() =>
                              dispatch(
                                decrementQuantity({
                                  id: item.id,
                                  selectedColor: item.selectedColor,
                                  selectedSize: item.selectedSize,
                                }),
                              )
                            }
                            className="w-6 h-6 flex items-center justify-center font-bold text-lg hover:opacity-60 transition"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                incrementQuantity({
                                  id: item.id,
                                  selectedColor: item.selectedColor,
                                  selectedSize: item.selectedSize,
                                }),
                              )
                            }
                            className="w-6 h-6 flex items-center justify-center font-bold text-lg hover:opacity-60 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 mt-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10 text-destructive hover:text-destructive"
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                id: item.id,
                                selectedColor: item.selectedColor,
                                selectedSize: item.selectedSize,
                              }),
                            )
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 shrink-0 bg-accent rounded-3xl p-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Order Summary</h3>

          <div className="flex flex-col gap-3 text-lg font-medium">
            <div className="flex justify-between">
              <span className="opacity-60">
                Subtotal ({totalQuantity} item{totalQuantity !== 1 ? "s" : ""})
              </span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">Estimated Delivery</span>
              <span className="font-semibold text-green-500">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">Estimated Tax</span>
              <span className="font-semibold">
                ${(totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="border-t border-border pt-3 flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${(totalPrice * 1.08).toFixed(2)}</span>
          </div>

          <Button className="w-full bg-foreground text-background hover:bg-foreground/90 uppercase font-semibold mt-1">
            Checkout
          </Button>
          <p className="underline font-semibold cursor-pointer opacity-60 hover:opacity-100 transition">
            Use a promo code
          </p>
        </div>
      </div>

      <YouMayLike />
    </section>
  );
}
