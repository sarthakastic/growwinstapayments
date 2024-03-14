"use client";

import useStore from "@/store/store";
import { MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProductCard = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log({ pathname });
  const products = useStore((state) => state.products);
  const loading = useStore((state) => state.loading);
  const tp = useStore((state) => state.totalPrice);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  const totalPrice = useStore((state) => state.getTotalPrice);

  useEffect(() => {
    totalPrice();
  }, [products]);

  console.log({ loading });

  return products?.length > 0 ? (
    <div className="my-5">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="flex flex-1 justify-between items-center gap-2 p-5 my-2 border bg-white"
        >
          <div>
            <Image
              className="h-28 w-40 border p-2  "
              src={product.image}
              alt={product.title}
              width={200}
              height={10}
            />
          </div>
          <div className="flex flex-col items-start ml-10  w-5/6 ">
            <p className="text-black">{product.title}</p>
            <p className="text-black/50">
              {" "}
              <span className="font-semibold"> Price :</span>
              {product.price}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex gap-5">
              <p className="text-black">Quantity</p>
              {pathname === "/checkout" && (
                <button
                  className="text-black"
                  onClick={() => {
                    decrementQuantity(product.id);
                    totalPrice();
                  }}
                >
                  <MinusCircle />
                </button>
              )}
              <p className="text-black">{product.quantity}</p>
              {pathname === "/checkout" && (
                <button
                  className="text-black "
                  onClick={() => {
                    incrementQuantity(product.id);
                    totalPrice();
                  }}
                >
                  <PlusCircle />
                </button>
              )}
            </div>

            <p className=" text-black ">
              Amount: {(product.quantity * product.price).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full h-full p-10 text-primary font-bold bg-primaryForeground flex flex-col justify-center items-center ">
      <p>Looks Like your cart is empty</p>
      <button
        className="border border-primary p-2"
        onClick={() => location.reload()}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default ProductCard;
