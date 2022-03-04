import React from 'react'
import RTX_3080 from '../imgs/RTX_30080TI.jpg';

function ProductCard() {
  return (
      <div className="mx-auto mb-5 border rounded transition ease-in-out hover:scale-[1.01] p-7 w-72 h-96 solid border-1 border-primary-gray text-primary-light">
          <div className="flex flex-col items-start header">
            <h3 className="text-lg font-medium uppercase">
                Product Name
            </h3>
            <h5>Sub Heading</h5>
      </div>
      <div className="flex items-center img_container h-[75%]">
          <img src={RTX_3080} alt="rtx" className="h-100"/>
      </div>
        <div className="flex items-center justify-between">
              <p className="text-xl font-medium">$100</p>
              <button className="px-5 py-2 font-medium rounded hover:bg-primary-light bg-secondary-dark text-primary-gray">Add To Cart</button>
          </div>

      </div>
  )
}

export default ProductCard