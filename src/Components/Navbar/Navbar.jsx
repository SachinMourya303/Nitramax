import React, { useState } from 'react'
import '/src/Components/style.css'
import { UserButton} from '@clerk/clerk-react'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({cartProduct , isSignedIn}) => {
  const [isOpen, setIsopen] = useState(false);
  const [isInputOpen, setInputopen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const searchHandler = () => {
    if (inputValue === "") {
      setInputopen(!isInputOpen);
    }
    else {
      navigate(`/searchedresult/${inputValue}`)
      setInputValue("");
    }
  }

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <nav className="navbar grid grid-cols-12 border-b border-gray-300 h-15 px-5 md:px-20">
        <ul className="navlinks-container hidden md:flex justify-between items-center col-span-3 gap-2">
          <NavLink to="/" className='nav-links flex flex-col'><span>Home</span><span className='hover-bar bg-purple-500'></span></NavLink>
          <NavLink to="/allproducts" className='nav-links flex flex-col'><span>Shop</span><span className='hover-bar bg-purple-500'></span></NavLink>
          <NavLink to="/myorders" className='nav-links flex flex-col'><span>MyOrders</span><span className='hover-bar bg-purple-500'></span></NavLink>
          <NavLink to="/contact" className='nav-links flex flex-col'><span>Contact</span><span className='hover-bar bg-purple-500'></span></NavLink>
        </ul>

        <div className="navbar-brand flex md:justify-center items-center col-span-6 text-2xl">
          <span className='text-purple-700'>NITRA</span><span className='text-gray-700'>MAX</span>
        </div>

        <ul className="nav-icons col-span-6 md:col-span-3 flex justify-end items-center gap-4">
          <li className='flex items-center bigScreen gap-4'>
            <div className='hidden md:block'><input type="text" placeholder='search' className={`${isInputOpen ? "block" : "hidden"} focus:outline-0 me-3 rounded-xl px-2 bg-gray-200 h-10`} value={inputValue} onChange={onChangeHandler} /></div>
            <button className='fa fa-search' onClick={() => searchHandler()}></button>
            <NavLink to="/favourite"><span className='fa fa-heart'></span></NavLink>
            <NavLink to="/cart">
              <div className='flex'>
                <span className='fa fa-shopping-cart'></span>
                <span className='mt-[-10px]'>{cartProduct.length}</span>
              </div>
            </NavLink>
          </li>


          <div>
            {
              isSignedIn ? (
                <UserButton />
              ) : (
                <NavLink to="/signin" className='fa fa-user'></NavLink>
              )
            }
          </div>

          <button className='md:hidden' onClick={() => setIsopen(!isOpen)}><span className='fa fa-bars'></span></button>
        </ul>
      </nav>
      <div className='px-5 md:px-20'>
        <li className={`${isInputOpen ? "block" : "hidden"} onmobile-search flex md:hidden col-span-12 mt-3 bg-gray-200 h-10`}>
          <input type="text" placeholder='search' className="w-[90%] px-2" value={inputValue} onChange={onChangeHandler} />
          <button className='fa fa-search' onClick={() => searchHandler()}></button>
        </li>
      </div>

      <ul className={`${isOpen ? "block" : "hidden"} md:hidden flex flex-col justify-around w-[100%] items-center bg-gray-100/80 h-40 z-100 rounded absolute`}>
        <NavLink to="/" className='nav-links flex flex-col'><span>Home</span><span className='hover-bar bg-purple-500'></span></NavLink>
        <NavLink to="/allproducts" className='nav-links flex flex-col'><span>Shop</span><span className='hover-bar bg-purple-500'></span></NavLink>
        <NavLink to="/myorders" className='nav-links flex flex-col'><span>MyOrders</span><span className='hover-bar bg-purple-500'></span></NavLink>
        <NavLink to="/contact" className='nav-links flex flex-col'><span>Contact</span><span className='hover-bar bg-purple-500'></span></NavLink>
      </ul>
    </div>
  )
}

export default Navbar