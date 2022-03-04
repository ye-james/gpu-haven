import React from 'react';
import GIGABYTE_LOGO from '../../imgs/GIGABYTE_LOGO.png';
import MSI_LOGO from '../../imgs/MSI_LOGO.png';

function FeaturedBrands() {
  return (
    <div className="w-4/5 h-full m-auto text-primary-dark">
        <h3 className="text-3xl font-bold tracking-[.3rem] my-[2rem] uppercase h-[15vh] flex items-center justify-center text-secondary-dark"> 
            Featured Brands
        </h3>
        <div className="flex flex-wrap justify-center gap-[2rem] mx-auto h-[35vh]">
            <div className="relative w-full h-full max-w-sm bg-primary-lightGray">
                <img src={GIGABYTE_LOGO} alt="gigabyte_logo" className="w-[150px] h-[150px] before:block before:absolute before:-inset-1 before:-skew-y-3"/>
            </div>
            <div className="w-full h-full max-w-sm bg-primary-lightGray">
                <img src={MSI_LOGO} alt="msi_logo" className="w-[100px] h-[150px]"/>
            </div>
        </div>

        
    </div>
  )
}

export default FeaturedBrands