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
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="toys" element={<Toys/>}></Route>
      <Route path="catalog" element={<Catalog/>}></Route>
      <Route path="character" element={<Character/>}></Route>
      <Route path="brand" element={<Brand/>}></Route>
      <Route path="language" element={<Language/>}></Route>
      <Route path="mainpage" element={<Mainpage/>}></Route>
      <Route path="wishlist" element={<Wishlist/>}></Route>
      <Route path="compare" element={<Compare/>}></Route>
      <Route path="products" element={<TwoProducts/>}></Route>
      <Route path="signup" element={<Signup/>}></Route>
      <Route path="signin" element={<Login/>}></Route>
      <Route path="checkout" element={<Checkout/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
