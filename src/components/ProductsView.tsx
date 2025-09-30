import React, { FC } from "react";

interface Props {
  data: any[];
}

const ProductsView: FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
            <p className="text-gray-600 text-sm flex-1 line-clamp-3">
              {product.description}
            </p>
            <span className="mt-3 font-bold text-lg">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
