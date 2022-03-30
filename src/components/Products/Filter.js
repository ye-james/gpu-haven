import React from 'react'

function Filter() {
  return (
      <div className='mb-16 overflow-auto'>
            <h3 className='h-full p-6 py-8 text-xl font-bold text-left border-b-2 bg-lightGray text-secondary-light'>Filter By:</h3>
            {/* Beginning of brands filter */}
            <div>
                <h3 className='h-full p-6 font-bold text-left text-md bg-lightGray text-secondary-light'>Brand</h3>
                <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>AMD</span>
                    <input type="checkbox" />
                </label>
                    <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>NVIDIA</span>
                <input type="checkbox" />
                </label>
                <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>MSI</span>
                    <input type="checkbox" />
                </label>
                <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>EVGA</span>
                    <input type="checkbox" />
                </label>
            </div>

          {/* Beginning of memory size filter */}
          <div>
                <h3 className='h-full p-6 font-bold text-left text-md bg-lightGray text-secondary-light'>Memory Size</h3>
                <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>8GB</span>
                    <input type="checkbox" />
                </label>
                    <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>10GB</span>
                <input type="checkbox" />
                </label>
                <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>11GB</span>
                    <input type="checkbox" />
                </label>
                <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>12GB</span>
                    <input type="checkbox" />
                </label>
          </div>
          

          {/* Beginning of price filter */}
          <div>
              <h3 className='h-full p-6 font-bold text-left text-md bg-lightGray text-secondary-light'>Price</h3>
              <input type="range" min="0" max="2000" step="50"/>
          </div>

          {/* Beginning of memory type filter */}
          <div>
              <h3 className='h-full p-6 font-bold text-left text-md bg-lightGray text-secondary-light'>Memory Type</h3>
              <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>GDDR4</span>
                    <input type="checkbox" />
              </label>
              <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>GDDR5</span>
                    <input type="checkbox" />
              </label>
              <label htmlFor="" className='flex items-center justify-between block px-8'>
                    <span className='font-medium leading-loose'>GDDR6</span>
                    <input type="checkbox" />
                </label>
          </div>
      </div>
      

  )
}

export default Filter