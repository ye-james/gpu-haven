import React from 'react'
import ProductListItem from './ProductListItem'

function ProductsList() {
  return (
    <div className='w-full px-16 py-8'>
        <h3 className='w-full py-2 font-bold text-left border-b-2 border-solid border-primary-light'>2 items for "3070"</h3>
        <ol>
            <li><ProductListItem/></li>
            <li><ProductListItem/></li>
        </ol>
    </div>
  )
}

export default ProductsList