import React from 'react'

function Cart() {
  return (
    <div className='w-3/4 mx-auto my-24'>
        <table className="w-full border-2 border-solid rounded-md border-primary-dark">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Product Name</td>
                <td><input type="number" value="1"/></td>
                <td>$50.00</td>
            </tr>
        </table>
    </div>
  )
}

export default Cart