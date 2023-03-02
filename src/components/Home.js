import React from 'react'
import Products from '../sidebar/Products'
function Home(props) {
  return (
    <div>
      <Products cart={props.cart} getData={props.getData} />
    </div>
  )
}

export default Home
