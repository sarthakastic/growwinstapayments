"use client";

import useStore from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";

const ProductCard = () => {
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
        <div key={product.id} className="flex bg-white">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={100}
          />
          <div>
            <p className="text-blue-500">{product.title}</p>
            <p className="text-yellow-500">{product.price}</p>
            <div className="flex">
              <button
                className="bg-black"
                onClick={() => {
                  decrementQuantity(product.id);
                  totalPrice();
                }}
              >
                -
              </button>
              <p className="text-purple-500">{product.quantity}</p>
              <button
                className="bg-black"
                onClick={() => {
                  incrementQuantity(product.id);
                  totalPrice();
                }}
              >
                +
              </button>
            </div>
            <p className="bg-red-100 text-amber-900 ">
              {product.quantity * product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
