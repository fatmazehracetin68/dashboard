import React from "react";
import Card from "./Card";
import { getProducts } from "@/app/fetch";
import Link from "next/link";

const Products = async () => {
  const data = await getProducts();

  console.log(data);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Ürünler</h1>
        <Link
          className=" text-2xl bg-green-400 hover:bg-green-600 transition py-1 px-3 rounded-lg text-white"
          href="/products/new"
        >
          Ürün Ekle
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 mt-5 gap-5">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
