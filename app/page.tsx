"use client";

import useStore from "@/store/store";

import Image from "next/image";

export default function Home() {
  const data = useStore((state) => state.data);
  const getData = useStore((state) => state.getProducts);

  console.log({ data });

  return (
    <p
      onClick={() => {
        getData();
      }}
    >
      hello world
    </p>
  );
}
