import React from "react";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductGrid({ products, isLoading, columns = 4 }) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  if (isLoading) {
    return (
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {Array(8).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-800/50 rounded-lg overflow-hidden">
            <Skeleton className="aspect-[4/3] bg-gray-800" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-5 w-3/4 bg-gray-800" />
              <Skeleton className="h-4 w-full bg-gray-800" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No products found.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}