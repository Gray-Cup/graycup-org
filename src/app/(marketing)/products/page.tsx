"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

type Product = {
  name: string;
  image: string;
};

const products: Product[] = [
  {
    name: "CTC Tea",
    image: "/products/ctc-tea.png",
  },
  {
    name: "Loose Leaf Tea",
    image: "/products/loose-leaf-tea.png",
  },
  {
    name: "Green Coffee Beans",
    image: "/products/green-coffee-beans.png",
  },
  {
    name: "Roasted Coffee Beans",
    image: "/products/roasted-coffee-beans.png",
  },
  {
    name: "Ground Coffee",
    image: "/products/ground-coffee.png",
  },
    {
    name: "Matcha Tea",
    image: "/products/matcha-tea.png",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden border border-gray-200 rounded-lg bg-white duration-300 p-0">
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          draggable="false"
          className="object-cover"
        />
      </div>
      <div className="-mt-3 pb-4 text-center">
        <h3 className="text-md font-semibold text-black">{product.name}</h3>
      </div>
    </Card>
  );
}

export default function ProductsPage() {
  return (
    <div className="px-4 lg:px-6">
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium quality tea and coffee selections
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
