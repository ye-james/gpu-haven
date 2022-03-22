import React from 'react';
import ProductCard from '../ProductCard';
import ProductCard2 from '../ProductCard2';

function RelatedProducts() {
  return (

    <div className="mt-8">
      <h1 className="text-3xl font-bold tracking-[.3rem] uppercase mb-8 flex items-center justify-center text-secondary-dark">Related Products</h1>
      <div className="w-3/4 mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          <ProductCard2 className="shrink-0"/>
          <ProductCard2 className="shrink-0"/>
          <ProductCard2 className="shrink-0"/>
        </div>
      </div>
    </div>


  )
}

export default RelatedProducts