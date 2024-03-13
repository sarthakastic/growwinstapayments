"use client";

import useStore from "@/store/store";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const data = useStore((state) => state.products);
  const pm = useStore((state) => state.paymentMethods);
  const getData = useStore((state) => state.getProducts);

  console.log({ data }, { pm });

  return (
    <>
      <p
        onClick={() => {
          getData();
        }}
      >
        hello world
      </p>
      <p onClick={() => router.push("/checkout")}>navigate</p>
    </>
  );
}
