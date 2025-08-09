import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence , motion } from 'framer-motion'
import SignIntab from './pages/SignIn/SignIntab'
import HeroContent from './Components/HeroContent/HeroContent'
import PopularProducts from './Components/PopularProducts/PopularProducts'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Favourite from './pages/Favourite/Favourite'
import productList from '/src/data.js'
import { useUser } from '@clerk/clerk-react'
import Allproducts from './pages/AllProducts/Allproducts'
import SearchedResult from './pages/SearchedResult/SearchedResult'
import Categories from './Components/Categories/Categories'
import Mensfashion from './pages/Mensfashion/Mensfashion'
import Womensfashion from './pages/Womensfashion/Womensfashion'
import Headphonefashion from './pages/Headphonefashion/Headphonefashion'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Cart from './pages/Cart/Cart'
import CustomerInfo from './pages/CustomerInfo/CustomerInfo'
import Myorders from './pages/Myorders/Myorders'

const App = () => {

  const [favouriteId, setFavouriteId] = useState("");
  const [favouriteItems, setfavouriteItems] = useState([]);
  const [cartProductId, setCartProductId] = useState("");
  const [cartProduct, setCartProduct] = useState([]);
  const [myOrders , setMyOrders] = useState([]);
  const [mensfashion, setMensFashion] = useState([]);
  const [womensfashion, setWomenensFashion] = useState([]);
  const [headphonefashion, setHeadphoneFashion] = useState([]);
  const { isSignedIn } = useUser();

    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      pincode: "",
      address: "",
      city: "",
      state: "",
    });


  useEffect(() => {
    const filterFav = () => productList.filter((items) => items.id == favouriteId)
    setfavouriteItems((prev) => [...prev, ...filterFav()])
  }, [favouriteId])

  useEffect(() => {
    const filterCart = () => productList.filter((items) => items.id == cartProductId)
    setCartProduct((prev) => [...prev, ...filterCart()])
    setMyOrders((prev) => [...prev, ...filterCart()]);
  }, [cartProductId])

  useEffect(() => {
    const filterMensFashion = () => productList.filter((items) => items.category.includes("boy"));
    setMensFashion(filterMensFashion);
  }, [])

  useEffect(() => {
    const filterWomensFashion = () => productList.filter((items) => items.category.includes("girl"));
    setWomenensFashion(filterWomensFashion);
  }, [])

  useEffect(() => {
    const filterHeadphoneFashion = () => productList.filter((items) => items.category.includes("headphone"));
    setHeadphoneFashion(filterHeadphoneFashion);
  }, [])
  const Homepage = () => {
    return (
      <div>
        <HeroContent />
        <PopularProducts setFavouriteId={setFavouriteId} setCartProductId={setCartProductId} isSignedIn={isSignedIn} />
        <Categories />
        <About />
        <Contact />
      </div>
    )
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar cartProduct={cartProduct} isSignedIn={isSignedIn} />

        <AnimatePresence>
          <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signin' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><SignIntab /></motion.div>} />
          <Route path='/productdetails/:id' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><ProductDetails setCartProductId={setCartProductId} isSignedIn={isSignedIn} /></motion.div>} />
          <Route path='/favourite' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Favourite favouriteItems={favouriteItems} /></motion.div>} />
          <Route path='/cart' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Cart cartProduct={cartProduct} setCartProduct={setCartProduct} /></motion.div>} />
          <Route path='/allproducts' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Allproducts setFavouriteId={setFavouriteId} setCartProductId={setCartProductId} isSignedIn={isSignedIn} /></motion.div>} />
          <Route path='/searchedresult/:name' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><SearchedResult setFavouriteId={setFavouriteId} setCartProductId={setCartProductId} isSignedIn={isSignedIn} /></motion.div>} />
          <Route path='/mensfashion' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Mensfashion setFavouriteId={setFavouriteId} setCartProductId={setCartProductId} isSignedIn={isSignedIn} mensfashion={mensfashion} /></motion.div>} />
          <Route path='/womensfashion' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Womensfashion setFavouriteId={setFavouriteId} setCartProductId={setCartProductId} isSignedIn={isSignedIn} womensfashion={womensfashion} /></motion.div>} />
          <Route path='/headphonefashion' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Headphonefashion setFavouriteId={setFavouriteId} setCartProductId={setCartProductId} isSignedIn={isSignedIn} headphonefashion={headphonefashion} /></motion.div>} />
          <Route path='/contact' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Contact /></motion.div>} />
          <Route path='/about' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><About /></motion.div>} />
          <Route path='/shipping' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><CustomerInfo cartProduct={cartProduct} formData={formData} setFormData={setFormData} setCartProduct={setCartProduct}/></motion.div>} />
          <Route path='/myorders' element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Myorders myOrders={myOrders} formData={formData}/></motion.div>} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}

export default App