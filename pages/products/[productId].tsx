import React from "react";
import { ProductCarousel } from "../../components/ProductCarousel";
import { ProductContent } from "../../components/ProductContent";
import { useRouter } from "next/router";

export default function productId() {
  const router = useRouter();
  return (
    //TODO: layout on resizing
    <div className="container py-4 px-4 pt-28">
      <div>{JSON.stringify(router.pathname)}</div>
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2">
        <div className="flex-auto max-w-xl">
          <ProductCarousel />
        </div>
        <div className="flex justify-center max-w-lg">
          <ProductContent />
        </div>
      </div>
    </div>
  );
}
