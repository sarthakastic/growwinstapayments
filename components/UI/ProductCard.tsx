"use client";

import Button from "@/components/UI/Button";
import useStore from "@/store/store";
import { MinusCircle, PlusCircle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const ProductCard = () => {
  const pathname = usePathname();

  const products = useStore((state) => state.products);

  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  const totalPrice = useStore((state) => state.getTotalPrice);
  const productLoading = useStore((state) => state.productLoading);

  useEffect(() => {
    totalPrice();
  }, [products, totalPrice]);

  if (productLoading) {
    return (
      <div className="h-80 bg-amber-50 w-full dark:bg-gray-700   animate-pulse "></div>
    );
  }

  return products?.length > 0 ? (
    <div className="my-5 shadow-2xl bg-transparent rounded-lg">
      <h4 className="text-primary font-bold text-lg ">Product List</h4>
      {products.map((product: any) => (
        <div
          key={product.id}
          className="flex xxs:flex-col xs:flex-row justify-between items-center gap-2 p-5 my-2 border border-primary bg-primaryBg rounded-lg"
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
          <div className="lg:flex w-full justify-between lg:px-5 gap-5 items-center ">
            <div className="flex flex-col items-start  ">
              <p className="">{product.title}</p>
              <p className="">
                {" "}
                <span className="font-semibold"> Price :</span>
                {product.price}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2 my-5 lg:my-0 ">
              <div className="flex gap-5">
                <p className="">Quantity</p>
                {pathname === "/checkout" && (
                  <button
                    className=""
                    onClick={() => {
                      decrementQuantity(product.id);
                      totalPrice();
                    }}
                  >
                    <MinusCircle />
                  </button>
                )}
                <p className="">{product.quantity}</p>
                {pathname === "/checkout" && (
                  <button
                    className=""
                    onClick={() => {
                      incrementQuantity(product.id);
                      totalPrice();
                    }}
                  >
                    <PlusCircle />
                  </button>
                )}
              </div>

              <p className="  ">
                Amount: {(product.quantity * product.price).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full h-full p-10 text-primary font-bold bg-primaryForeground flex flex-col justify-center items-center ">
      <p className="my-5">Looks Like your cart is empty</p>
      <div className="w-1/2">
        <Button onClick={() => location.reload()} text="Start Shopping" />
      </div>
    </div>
  );
};

export default ProductCard;
