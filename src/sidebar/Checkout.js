import React from 'react'

function Checkout() {
  return (
    <>
      <div className="container">
        <div className="checkout1">
            <h1>SHOPPING CART</h1>
        </div>
        <div className="checkout2">
            <h2>SUMMARY</h2>
            <label>Shipping</label>
            <input type="text" />
            <label>Given Code</label>
            <input 
            type="number"
            placeholder='Enter your code'
            />
            <h4>Total</h4>
            <button>CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default Checkout
