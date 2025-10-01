import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white py-32 px-6 min-h-[86vh] bg-gray-900">
      <h1 className="text-5xl font-bold mb-6">Welcome</h1>
      <p className="text-lg mb-8 max-w-xl text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        earum consectetur et eius, nulla iste corrupti odit repellat
        consequuntur amet.
      </p>

      <div className="flex gap-4">
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          View Products
        </Link>
        <Link
          href="/users"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          View Users
        </Link>
      </div>
    </section>
  );
};

export default Hero;
