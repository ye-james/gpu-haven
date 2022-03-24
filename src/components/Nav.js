import React from 'react'
import { Link } from 'react-router-dom';
import gpuicon from '../imgs/graphics-card-svgrepo-com.svg';

function Nav() {
  return (
      <nav className="flex flex-wrap items-center justify-between w-full p-6  bg-primary-dark border-secondary-light drop-shadow-xl">
      <div className="flex items-center flex-shrink-0 mr-6 text-primary-gray">
            <img src={gpuicon} className="w-10 h-10 ml-5 mr-3 " alt="nav-icon"/>
            <Link to='/' className="text-xl font-semibold tracking-tight">GPU Haven</Link>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border border-white rounded text-primary-gray border-primary-gray hover:text-white hover:">
                <svg class="fill-primary-gray h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="block w-full flew-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <Link to="/" className="block mt-4 mr-4 text-lg font-medium lg:inline-block lg:mt-0 text-primary-gray hover:text-secondary-light">
                Home
                  </Link>
                <Link to="explore" className="block mt-4 mr-4 text-lg font-medium lg:inline-block lg:mt-0 text-primary-gray hover:text-secondary-light">
                Explore
                </Link>
                <Link to="products" className="block mt-4 mr-4 text-lg font-medium lg:inline-block lg:mt-0 text-primary-gray hover:text-secondary-light">
                Products
                </Link>
            </div>
            <Link to="cart" className="inline-block px-4 py-2 mt-4 text-sm text-lg font-medium leading-none border rounded text-primary-gray border-text-primary-gray hover:border-transparent hover:text-primary-dark hover:bg-secondary-light lg:mt-0">Cart</Link>
        </div>
    </nav>
  )
}

export default Nav