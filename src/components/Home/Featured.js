import React from 'react'
import ProductCard from '../ProductCard'
import ProductCard2 from '../ProductCard2'

function Featured() {
  return (
      <section id="featured">
      <div className="w-full text-primary-dark pb-[50px]">
        <h3 className="text-3xl font-bold tracking-[.3rem] uppercase h-[15vh] flex items-center justify-center text-secondary-dark">Featured Products</h3>
        <div className="w-2/4 mx-auto">
          <div className="flex flex-wrap justify-center ">
          {/* <div className="grid grid-flow-row grid-cols-4 w-4/5 md:grid-cols-3 sm:grid-cols-1 gap-[1rem] mx-auto auto-rows-auto products_container"> */}
              <ProductCard2/>
              <ProductCard2/>
              <ProductCard2/>
          </div>
        </div>

      </div>
          
    </section>
  )
}

export default Featured