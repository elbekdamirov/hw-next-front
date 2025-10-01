"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMore = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/products/${id}`)}>SeeMore</button>
  );
};

export default SeeMore;
