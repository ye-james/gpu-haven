import React from 'react'
import { Link } from 'react-router-dom'
import RTX_3070 from '../../imgs/RTX_3070.jpg';

function ProductListItem() {
  return (
    <div className='w-full py-8 border-b-[2px] border-solid border-primary-lightGray'>
        <div className='flex flex-wrap gap-12'>
            <img src={RTX_3070} alt="rtx_3070" className='w-48'/>
            {/* Product Details */}
            <div>
                <Link to="/" className='mb-4 text-2xl text-left'>Product Detail</Link>
                <div className='flex flex-col items-start justify-between'>
                    <p><span className='font-bold'>Model: </span> RTX 3070</p>
                    <p className='text-xs'><span className='font-bold'>SKU:</span> 123456</p>
                    <div className='flex items-center'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-o'></i>
                        <p className='ml-2'>(12)</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col ml-auto'>
                <p className='text-2xl font-bold'>$899.99</p>
                <Link to="" className="w-full px-5 py-2 font-medium ease-in-out rounded hover:bg-primary-light bg-secondary-dark text-primary-gray">View Product</Link>
            </div>
        </div>

    </div>
  )
}

export default ProductListItem