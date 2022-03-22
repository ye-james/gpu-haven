import React from 'react'

function Footer() {
  return (
    <div className="bg-primary-dark p-10 text-primary-gray h-[20vh]">
      <div className="flex flex-wrap items-center justify-between p-6">
        <h3 className="text-3xl italic font-bold">GPU Haven</h3>
        <div className="block w-full flew-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm uppercase lg:flex-grow">
                <a href="#" className="block mt-4 mr-4 text-lg font-medium lg:inline-block lg:mt-0 text-primary-gray hover:text-secondary-light">
                Home
                  </a>
                <a href="#" className="block mt-4 mr-4 text-lg font-medium lg:inline-block lg:mt-0 text-primary-gray hover:text-secondary-light">
                Explore
                </a>
                <a href="#" className="block mt-4 mr-4 text-lg font-medium lg:inline-block lg:mt-0 text-primary-gray hover:text-secondary-light">
                Products
                </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="w-1/2 p-6 text-left">GPU Haven is built by gamers for gamers in mind. Whether it's NVIDIA, AMD or all the brands in between, GPU Haven is the only place you'll need for gaming ready graphics cards. We strive to provide the best customer service to you.</p>
        <div className="flex flex-wrap w-1/4 gap-[1rem]">
          <span>Social Item 1</span>
          <span>Social Item 1</span>
          <span>Social Item 1</span>
        </div>
      </div>
      <p className="mt-10">&copy; GPU Haven 2022. All rights reserved</p>
    </div>
  )
}

export default Footer