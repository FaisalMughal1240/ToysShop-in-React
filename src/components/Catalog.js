import React from 'react'
function Catalog() {
  const [shown,setShown] = React.useState(false);

  return (
    <div>
      <h1>Catalog</h1>
      <input type={shown ? "text" : "password"} />
      <button onClick={() => setShown(!shown)}>Show/Hide Password</button>
    </div>
  )
}
export default Catalog