import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='border-gray-300 border-t mt-10'>
            <div className='px-5 md:px-20 mt-10 flex justify-between flex-wrap'>
                <div className="navbar-brand  flex flex-col w-[100%] md:w-[50%]">
                    <label className='text-2xl'><span className='text-purple-700'>NITRA</span><span className='text-gray-700'>MAX</span></label>
                    <label className='text-gray-700 mt-10'>Nitramax is a leading e-commerce platform that allows individuals and businesses to create their own online stores to sell products such as clothing, electronics, jewelry, and more. It offers user-friendly tools, secure payments, and powerful customization options for seamless online selling.</label>
                </div>

                <div className='w-[100%] md:w-[20%] mt-5 md:mt-0'>
                    <label className='w-[100%] flex text-lg'>Company</label>
                    <ul className='flex flex-col justify-around w-[100%] text-gray-700 h-40  mt-5'>
                        <NavLink to="/" className='nav-links flex flex-col'><span>Home</span></NavLink>
                        <NavLink to="/allproducts" className='nav-links flex flex-col'><span>Shop</span></NavLink>
                        <NavLink to="/about" className='nav-links flex flex-col'><span>AboutUs</span></NavLink>
                        <NavLink to="/contact" className='nav-links flex flex-col'><span>Contact</span></NavLink>
                    </ul>
                </div>

                <div className='w-[100%] md:w-[20%] mt-5 md:mt-0 flex flex-col'>
                    <label className='text-lg'>Get In Touch</label>
                    <div className='flex flex-col justify-around h-30 text-gray-700'>
                        <span><i className='fa fa-phone text-gray-700  mt-5' /> +91 9359489354</span>
                        <span><i className='fa fa-envelope text-gray-700' /> nitramax@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex justify-center border-gray-300 border-t mt-5 text-gray-700'>
                <span><i className='fa-regular fa-copyright'/> 2025 Nitramax.dev All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Contact