import React from 'react'

function Checkout(props) {
  return (
    <>
      <div className="container">
        <div className='checkout1'>
          <h2>Checkout Details</h2>
        {
          props.cart.map((data)=>{
            return <div className="finalcheckout">
           <div className="imagefinal">
           <img 
              src={data.image} 
              alt=""
              width='150px'
              height='130px'
              />
           </div>
             <div className="text1">
              <h4>Product Name</h4>
             <p>{data.name}</p>
             </div>
             <div className="text2">
             <h4>Product Price</h4>
             <p>${data.price}</p>
             </div>
            </div>
       
          })
        }
        </div>
        <div className="checkout2">
          <h2>SUMMARY</h2>
          <label>Shipping</label>
          <input type="text" />
          <label>Given Code</label>
          <input type="number" placeholder="Enter your code" />
          <h4>Total</h4>
          <button >CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default Checkout
