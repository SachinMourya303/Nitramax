import React, { useState } from 'react'
import productList from '/src/data.js'
import { NavLink } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import Contact from '../../Components/Contact/Contact'

const Allproducts = ({ setFavouriteId, setCartProductId, isSignedIn }) => {


    const sendFavourite = (id) => {
        if (isSignedIn) {
            setFavouriteId(id);
            toast("Added to Favourite");
        }
        else {
            toast("Signin first")
        }
    }
    const sendIdToCartId = (id) => {
        if (isSignedIn) {
            setCartProductId(id);
            toast("Added to Cart");
        }
        else {
            toast("Signin first", {
                style: { color: "red" }
            });
        }
    }
    return (
        <div>
            <Toaster />
            <div className='px-5 md:px-20 mt-5'>
                <div className='text-gray-700 mt-5'><NavLink to="/">Home</NavLink> ❯ <NavLink to="/productdetails">Allproducts</NavLink></div>
                <label className='text-2xl flex flex-col justify-center md:justify-start w-[100%]'>
                    <span className='animation-bar bg-purple-700'></span>
                </label>
                <div className='flex flex-wrap gap-4 mt-5 justify-center md:justify-start'>
                    {
                        productList.map((items) => {
                            return (
                                <div key={items.id}>
                                    <div className='w-35 md:w-50 lg:w-60 '>
                                        <figure className='bg-gray-100 rounded flex h-35 md:h-60 p-2'>
                                            <NavLink to={`/productdetails/${items.id}`}className="w-[100%]">
                                                <img src={items.img[0]} alt="" className='w-[100%] hover:scale-105 duration-300 cursor-pointer relative h-[100%]' />
                                            </NavLink>
                                            <figcaption className='absolute' onClick={() => sendFavourite(items.id)}><span className='fa-solid fa-heart py-2 rounded-xl m-2 bg-white h-8 w-8 text-center text-gray-400 hover:text-red-500 pointer-coarse'></span></figcaption>
                                        </figure>
                                        <figcaption className='text-gray-700'>{items.name.slice(0,20)}</figcaption>
                                        <figcaption className='w-[100%] text-gray-400 text-sm'>{items.description.slice(0, 30)}</figcaption>
                                        <figcaption><span className='text-purple-700'>{items.ratings}</span><span className='text-purple-400'>{items.noratings}</span></figcaption>
                                        <figcaption className='flex justify-between'><span className='text-gray-700'>₹{items.price}</span> <button className='text-gray-400 border border-gray-300 rounded-md px-2 text-sm hover:scale-105' onClick={() => sendIdToCartId(items.id)}><span className='fa fa-bag-shopping' />Add</button></figcaption>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default Allproducts