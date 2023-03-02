import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Toys from './components/Toys'
import Catalog from './components/Catalog'
import Character from './components/Character'
import Brand from './components/Brand'
import Home from './components/Home'
import Language from './components/Language';
import Navbar from './components/Navbar';
import Header from './components1/Header';
import Mainpage from './components1/Mainpage'
import Wishlist from './components1/Wishlist'
import Compare from './components1/Compare'
import TwoProducts from './components1/TwoProducts'
import Signup from './Registration/Signup';
import Login from './Registration/Login';
import Checkout from './sidebar/Checkout';
// import ErrorBoundry from './ErrorBoundry';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState([]);
  const [login,setLogin]=useState(false)
  const getData = (e) => {
    setCart(prevCart => [...prevCart, e]);
  };
  const getLogin=(e)=>{
    console.log('dataaaaaaaa',e)
  }
  console.log('loginmmmm',login)
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Header cart={cart}/>
      <Routes>
      <Route path="/" element={<Home cart={cart} getData={getData}/>}></Route>
      <Route path="toys" element={<Toys/>}></Route>
      <Route path="catalog" element={<Catalog/>}></Route>
      <Route path="character" element={<Character/>}></Route>
      <Route path="brand" element={<Brand/>}></Route>
      <Route path="language" element={<Language/>}></Route>
      <Route path="mainpage" element={<Mainpage/>}></Route>
      <Route path="wishlist" element={<Wishlist />}></Route>
      <Route path="compare" element={<Compare/>}></Route>
      <Route path="twoproducts" element={<TwoProducts/>}></Route>
      <Route path="signup" element={<Signup/>}></Route>
      <Route path="signin" element={<Login login={login} getLogin={getLogin}/>}></Route>
      <Route path="checkout" element={<Checkout cart={cart}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
