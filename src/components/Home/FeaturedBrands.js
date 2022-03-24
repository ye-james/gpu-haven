import React from 'react';
import GIGABYTE_LOGO from '../../imgs/GIGABYTE_LOGO.png';
import MSI_LOGO from '../../imgs/MSI_LOGO.png';

function FeaturedBrands() {
  return (
    <div className="relative w-4/5 m-auto text-primary-dark">
        <h3 className="text-3xl font-bold tracking-[.3rem] my-[2rem] uppercase flex items-center justify-center text-secondary-dark py-16"> 
              Featured Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-[4rem] mx-auto relative">
              <div className="relative flex flex-col justify-end w-full max-w-sm h-[300px] bg-primary-lightGray max-h-96">
                  <div className="w-[150px] h-[150px] block absolute top-[-25%] left-[50%] translate-x-[-50%] translate-y-[25%] mx-auto">
                      <img src={GIGABYTE_LOGO} alt="msi_logo" className="w-[150px] h-[150px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center mb-5 h-1/2">
                        <p className="p-5 mt-3 font-bold text-secondary-dark">Discover AORUS premium graphics cards!</p>
                        <button className="w-2/4 px-5 py-2 font-medium rounded hover:bg-primary-light bg-secondary-dark text-primary-gray">Shop Now!</button>
                  </div>
            </div>
              <div className="relative flex flex-col justify-end w-full max-w-sm h-[300px] bg-primary-lightGray max-h-96">
                  <div className="w-[150px] h-[150px] block absolute top-[-25%] left-[50%] translate-x-[-35%] translate-y-[25%] mx-auto">
                      <img src={MSI_LOGO} alt="msi_logo" className="w-[100px] h-[150px]" />
                  </div>
                  <div className="flex flex-col items-center justify-center mb-5 h-1/2">
                        <p className="p-5 mt-3 font-bold text-secondary-dark upper">Hear Beyond The Limits! </p>
                        <button className="w-2/4 px-5 py-2 font-medium rounded hover:bg-primary-light bg-secondary-dark text-primary-gray">Shop Now!</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedBrands
//