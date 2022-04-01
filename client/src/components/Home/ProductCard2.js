import React from 'react'
import { Link } from 'react-router-dom';
import RTX_3080 from '../../imgs/RTX_30080TI.jpg';
import RTX_3070 from '../../imgs/RTX_3070.jpg';

function ProductCard2() {
  return (
    <div className="flex flex-col p-4 w-[300px] h-[450px]">
        <img src={RTX_3070} alt="rtx" className="w-full"/>
        <div className="mt-4">
          <h3 className="p-2 text-lg font-medium uppercase">PRODUCT NAME</h3>
          <Link to="/product" className="w-full px-5 py-2 font-medium ease-in-out rounded hover:bg-primary-light bg-secondary-dark text-primary-gray hover:tracking-widest">View Product</Link>
        </div>

    </div>
  )
}

export default ProductCard2