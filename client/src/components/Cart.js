import React from 'react'
import RTX_3070 from '../imgs/RTX_3070.jpg'

function Cart() {
  return (

      <div className='w-3/4 p-12 mx-auto my-24 border-2 border-solid border-primary-light'>
        <div className='w-full'>
          <h3 className="text-2xl font-bold text-primary-dark">Cart <span className='text-2xl font-bold text-primary-dark'><i className='fa fa-shopping-cart'/> (2)</span></h3>
          <table className="w-full">
              <tr>
                  <th className='text-left p-[5px] text-white	background-primary-dark text-lg'>Product</th>
                  <th className='text-center p-[5px] text-white	text-lg'>Quantity</th>
                  <th className='text-center p-[5px] text-white	text-lg'>Price</th>
              </tr>
              
              <tr className='border-b border-solid border-primary-light'>
                <td className='px-3 py-8'>
                  <div className='flex flex-wrap items-center gap-8'>
                  <img src={RTX_3070} alt="rtx" className='w-32'/>
                <div className='text-left'>
                  <p className='text-xl font-bold'>Product Name</p>
                  <small className='text-lg leadin'>Price $50.00</small>
                  <br></br>
                  <a href="" className='text-sm text-primary-dark'>Remove</a>
                </div>
                  </div>
                  </td>
                  <td><input className="px-2 w-[50px] h-[40px] border-2 border-solid border-primary-dark text-right" type="number" value="1"/></td>
                  <td>$50.00</td>
            </tr>
          
              <tr className='border-b border-solid border-primary-light'>
                <td className='px-3 py-5'>
                  <div className='flex flex-wrap items-center gap-8'>
                  <img src={RTX_3070} alt="rtx" className='w-32'/>
                <div className='text-left'>
                  <p className='text-xl font-bold'>Product Name</p>
                  <small className='text-lg'>Price $50.00</small>
                  <br></br>
                  <a href="" className='text-sm text-primary-dark'>Remove</a>
                </div>
                  </div>
                  </td>
                  <td><input className="px-2 w-[50px] h-[40px] border-2 border-solid border-primary-dark text-right" type="number" value="1"/></td>
                  <td>$50.00</td>
            </tr>
          
          </table>

          <div className='flex justify-end p-6'>
            <table className='w-1/4 text-lg'>
              <tr className='flex justify-between'>
                <td className='font-bold'>Subtotal:</td >
                <td>$ 200.00</td>
              </tr>
              <tr className='flex justify-between'>
                <td className='font-bold'>Tax (10%):</td>
                <td>$ 20.00</td>
              </tr>
              <tr className='flex justify-between'>
                <td className='font-bold'>Total:</td>
                <td className='font-bold'>$ 220.00</td>
              </tr>
            </table>
          </div>

      </div>
    </div>

  )
}

export default Cart