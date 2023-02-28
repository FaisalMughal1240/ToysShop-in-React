import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoBagCheckOutline } from 'react-icons/io5'
import axios from 'axios'
import '../App.css'
function Products() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/viewproducts')
      .then((res) => {
        setData(res.data.item)
      })
      .catch((error) => {
        console.log(error, 'error')
      })
  }, [])
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handlesearchkey = () => {
    axios
      .post('http://localhost:5000/api/search', {
        name: search,
      })
      .then((res) => {
        console.log('Search', res.data)
        setData(res.data.products)
      })
      .catch((error) => {
        console.log('no product found')
      })
  }
  const handleSelect = (e) => {
    if (e.target.value === 'ALL') {
      axios
        .get('http://localhost:5000/api/viewproducts')
        .then((res) => {
          setData(res.data.item)
        })
        .catch((error) => {
          console.log(error, 'error')
        })
    } else if (e.target.value === 'Way to Train') {
      axios
        .post('http://localhost:5000/api/search', {
          name: 'Way to Train',
        })
        .then((res) => {
          console.log(res.data)
          setData(res.data.products)
        })
        .catch((error) => {
          console.log('no product found')
        })
    } else if (e.target.value === 'Blocks for kids') {
      axios
        .post('http://localhost:5000/api/search', {
          name: 'Blocks for kids',
        })
        .then((res) => {
          console.log(res.data)
          setData(res.data.products)
        })
        .catch((error) => {
          console.log('no product found')
        })
    } else if (e.target.value === 'Car for kids') {
      axios
        .post('http://localhost:5000/api/search', {
          name: 'Car for kids',
        })
        .then((res) => {
          console.log(res.data)
          setData(res.data.products)
        })
        .catch((error) => {
          console.log('no product found')
        })
    }
  }
  return (
    <>
      <div className="main">
        <div className="box1">
          <h5>Price</h5>
          <button className="btn1">FROM $200</button>
          <button className="btn2">UPTO $900</button> <br /> <br />
          <input type="range" />
          <h5>Theme</h5>
          <input type="checkbox" />
          <label>Space</label> <br />
          <input type="checkbox" />
          <label>Ninja</label> <br />
          <h5>Transport (44)</h5>
          <input type="checkbox" />
          <label>Buildings (44)</label> <br />
          <input type="checkbox" />
          <label>Homes (44)</label> <br />
          <h5>Age</h5>
          <input type="checkbox" />
          <label>Upto a year</label> <br />
          <input type="checkbox" />
          <label>1year - 2year</label> <br />
          <input type="checkbox" />
          <label>3year - 5year</label> <br />
          <input type="checkbox" />
          <label>6year - 10year</label> <br />
          <input type="checkbox" />
          <label>Older than - 12year</label> <br />
          <h5>Brand</h5>
          <h5>Characters</h5>
          <h5>Stock Availability</h5>
          <button>APPLY FILTER</button>
        </div>
        <div className="box2">
          <h1>Catalog</h1>
          <div className="filter">
            <input
              type="search"
              placeholder="Search Amoung 100+ Products"
              onChange={handleSearch}
              onKeyDown={handlesearchkey}
            />
            <select onClick={handleSelect}>
              <option value="ALL">ALL</option>
              <option value="Way to Train">Way to Train</option>
              <option value="Blocks for kids">Blocks for kids</option>
              <option value="Car for kids">Car for kids</option>
            </select>
          </div>
          <div className="card">
            {data.map((e) => {
              return (
                <div className="designcard">
                  <div className="imagebc">
                    <img
                      src={e.image}
                      alt=""
                      width="100%"
                      height="250px"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="content">
                    <span>
                      <strong>VENDOR: </strong>
                      {e.vendor}
                    </span>
                    <br />
                    <span>
                      <strong>TOY NAME:</strong> {e.name}
                    </span>
                    <span>
                      {' '}
                      <br />
                      <strong>PRICE: </strong>
                      <strong>$</strong>
                      {e.price}
                    </span>
                    <IoBagCheckOutline
                      onClick={() => navigate('/checkout')}
                      style={{ color: 'red', fontSize: '30px', float: 'right' }}
                    >
                      SHOP NOW
                    </IoBagCheckOutline>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
