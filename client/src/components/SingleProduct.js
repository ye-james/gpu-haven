import React from 'react'
import ProductAccordion from './ProductPage/ProductAccordion'
import ProductPage from './ProductPage/ProductPage'
import RelatedProducts from './ProductPage/RelatedProducts'

function SingleProduct() {
  return (
      <div>
      <ProductPage />
      <ProductAccordion />
          <RelatedProducts/>
    </div>
  )
}

export default SingleProduct