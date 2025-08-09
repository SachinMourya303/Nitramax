import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Contact from '../../Components/Contact/Contact';


const Favourite = ({ favouriteItems }) => {

  return (
    <div>
      <div className='px-5 md:px-20 mt-10'>
        {
          favouriteItems.length > 0 ? (
            <div>
              <label className='text-2xl flex flex-col justify-center md:justify-start w-[100%]'>
                <span className='text-gray-700'>Favourite products</span>
                <span className='animation-bar bg-purple-700'></span>
              </label>
              <div className='flex flex-wrap gap-4 mt-5 justify-center md:justify-start'>
                {

                  favouriteItems.map((items) => {
                    return (
                      <div key={items.id}>
                        <div className='w-35 lg:w-60 '>
                          <figure className='bg-gray-100 rounded flex'>
                            <NavLink to={`/productdetails/${items.id}`}>
                              <img src={items.img[0]} alt="" className='w-[100%] hover:scale-105 duration-300 cursor-pointer relative' />
                            </NavLink>
                            <figcaption className='absolute'><span className='fa-solid fa-heart py-2 rounded-xl m-2 bg-white h-8 w-8 text-center text-red-500 hover:text-red-500 pointer-coarse'></span></figcaption>
                          </figure>
                          <figcaption className='text-gray-700'>{items.name}</figcaption>
                          <figcaption className='w-[100%] text-gray-400 text-sm'>{items.description.slice(0, 30)}</figcaption>
                          <figcaption><span className='text-purple-700'>{items.ratings}</span><span className='text-purple-400'>{items.noratings}</span></figcaption>
                          <figcaption className='flex justify-between'><span className='text-gray-700'>₹{items.price}</span> <button className='text-gray-400 border border-gray-300 rounded-xl px-2 text-sm hover:scale-105'><span className='fa fa-bag-shopping' />Add</button></figcaption>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ) : (
            <div className='flex justify-center w-[100%]'>
              <div className='flex flex-col w-[100%] md:w-[50%] justify-center items-center'>
                <span className='text-center w-[100%] text-2xl text-gray-500'>Your Favourite Items Is Empty</span>
                <img src="/img/undraw_favourite-item_kv86.png" alt="" className='w-[50%]' />

                <div className='text-purple-700 w-[100%] text-center text-xl'>
                  <NavLink to="/"><span className='fa fa-arrow-left mt-10' /> <span>Continue Shopping</span></NavLink>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <Contact/>
    </div>
  )
}

export default Favourite