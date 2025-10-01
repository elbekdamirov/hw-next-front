"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMore = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button className="text-left" onClick={() => router.push(`/users/${id}`)}>
      SeeMore
    </button>
  );
};

export default SeeMore;
