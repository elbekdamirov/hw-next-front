import React from "react";
import ProductsView from "@/components/ProductsView";

const Products = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <div>
      <ProductsView data={data} />
    </div>
  );
};

export default Products;
