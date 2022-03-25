import React from 'react'
import RTX_3070 from '../imgs/RTX_3070.jpg'

function Cart() {
  return (
    <div className='w-3/4 mx-auto my-24'>
        <table className="w-full">
            <tr>
                <th className='text-left p-[5px] text-white	background-primary-dark text-lg'>Product</th>
                <th className='text-center p-[5px] text-white	text-lg'>Quantity</th>
                <th className='text-center p-[5px] text-white	text-lg'>Price</th>
            </tr>

        
            <tr>
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
        
            <tr>
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

        <div className='flex justify-end '>
          <table >
            <tr>
              <td>Subtotal:</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$230.00</td>
            </tr>
          </table>
        </div>

    </div>
  )
}

export default Cart