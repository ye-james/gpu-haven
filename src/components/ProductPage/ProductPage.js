import React, { useState } from 'react'
import RTX_3070 from '../../imgs/RTX_3070.jpg'
import img1 from '../../imgs/3070/img-1.jpg'
import img2 from '../../imgs/3070/img-2.jpg'
import img3 from '../../imgs/3070/img-3.jpg'
import img4 from '../../imgs/3070/img-4.jpg'

function ProductPage() {

  const [amount, setAmount] = useState(1);
  const [displayImg, setDisplayImg] = useState(RTX_3070);
  return (
      <div className="flex flex-wrap w-3/4 mx-auto my-16">
        {/* Image column */}
        <div className="flex-auto w-full h-full px-8 basis-6/12">
        <img src={displayImg} alt="product_img" onMouseLeave={() => setDisplayImg(RTX_3070)}/>
        
        <div className='flex justify-between'>
          <div className='basis-[24%]'> 
            <img src={img1} alt="small-img-1"
              onMouseEnter={() => setDisplayImg(img1)}
            />
          </div>
          <div className='basis-[24%]'>
            <img src={img2} alt="small-img-2"
              onMouseEnter={() => setDisplayImg(img2)}
            />
          </div>
          <div className='basis-[24%]'>
            <img src={img3} alt="small-img-3" onMouseEnter={() => setDisplayImg(img3)}/>
          </div>
          <div className='basis-[24%]'>
            <img src={img4} alt="small-img-1" onMouseEnter={() => setDisplayImg(img4)}/>
          </div>
        </div>
          </div>
          {/* Product details column */}
        <div className="flex-auto px-8 basis-6/12">
          <h3 className="mb-8 text-3xl font-bold text-left uppercase text-secondary-dark">
              Product Title
          </h3>
          <div className="flex flex-col">
            <h4 className='mb-2 font-bold text-left uppercase text-md text-secondary-dark'>Product Details</h4>
            <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum optio voluptatum explicabo iusto, provident rerum exercitationem ex sunt cum aliquam unde reiciendis ipsa nam autem?</p>
            
            <p className="my-8 text-lg font-bold text-left">$799.99</p>
            <div className='flex gap-4'>
            <input
              className="w-20 text-right border-2 border-solid basis-10 border-primary-dark"
              type="number"
              value={amount}
              onChange={e => e.target.value > 0 ? setAmount(e.target.value) : 0}
            />
                <button className="px-5 py-2 font-medium rounded hover:bg-primary-light bg-secondary-dark text-primary-gray">Add To Cart</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default ProductPage