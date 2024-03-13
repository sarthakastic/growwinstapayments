"use client";

import useStore from "@/store/store";
import { MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProductCard = () => {
  const router = useRouter();
  const products = useStore((state) => state.products);
  const tp = useStore((state) => state.totalPrice);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  const totalPrice = useStore((state) => state.getTotalPrice);

  useEffect(() => {
    totalPrice();
  }, []);

  console.log(products, { tp });

  return (
    <div>
      {products.map((product: any) => (
        <div
          key={product.id}
          className="flex flex-1 justify-between gap-2 p-5 border bg-white"
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
          <div className="bg-red-500">
            <p className="text-black">{product.title}</p>
            <p className="text-black/50">
              {" "}
              <span className="font-semibold"> Price :</span>
              {product.price}
            </p>
          </div>
          <div>
            <div className="flex gap-5">
              <p className="text-black">Quantity</p>
              <button
                className="text-black"
                onClick={() => {
                  decrementQuantity(product.id);
                  totalPrice();
                }}
              >
                <MinusCircle />
              </button>
              <p className="text-purple-500">{product.quantity}</p>
              <button
                className="text-black "
                onClick={() => {
                  incrementQuantity(product.id);
                  totalPrice();
                }}
              >
                <PlusCircle />
              </button>
            </div>

            <p className="bg-red-100 text-amber-900 ">
              {product.quantity * product.price}
            </p>
          </div>
        </div>
      ))}
      <p
        className="text-purple-600"
        onClick={() => {
          router.push("/payment");
        }}
      >
        Make Payment {tp}
      </p>
    </div>
  );
};

export default ProductCard;
