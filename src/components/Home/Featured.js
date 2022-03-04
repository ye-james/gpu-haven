import React from 'react'
import ProductCard from '../ProductCard'

function Featured() {
  return (
      <section id="featured">
      <div className="w-full mt-10 h-96 text-primary-dark">
        <h3 className="mb-5 text-3xl font-bold tracking-[.3rem] uppercase text-secondary-dark">Featured</h3>
        <div className="flex products_container">
            <ProductCard />
            <ProductCard/>
        </div>
      </div>
          
    </section>
  )
}

export default Featured