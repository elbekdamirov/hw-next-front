import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  const data = await fetch("https://fakestoreapi.com/products?limit=100").then(
    (res) => res.json()
  );
  return data?.map((pro: any) => ({
    id: pro.id.toString(),
  }));
}

const DetailProduct = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    notFound();
  }
  const data = await response.json();

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-center items-center">
          <Image
            src={data?.image}
            alt={data?.title}
            width={400}
            height={400}
            className="rounded-lg object-contain max-h-[400px]"
          />
        </div>

        <div className="flex flex-col justify-between space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
          <strong className="text-2xl text-green-600">{data?.price} USD</strong>
          <p className="text-gray-600 leading-relaxed">{data?.description}</p>

          <button className="mt-6 w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
