import React from 'react';
import ProductCard from '../ProductCard';

function RelatedProducts() {
  return (

    <div className="py-8">
      <h1 className="text-3xl font-bold tracking-[.3rem] uppercase mb-16 flex items-center justify-center text-secondary-dark">Related Products</h1>
      <div className="flex w-3/4 mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>


  )
}

export default RelatedProducts