import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
   const navigate = useNavigate();

    return (
        <div>
            <div className='px-5 md:px-20 mt-10'>
                <div className='w-[100%] flex justify-between flex-wrap'>
                    <figure className='w-[100%] md:w-[30%] h-[500px] bg-gray-200 relative rounded mt-10 md:mt-0' onClick={() => navigate("/mensfashion")}>
                        <img src="/img/man-white.png" alt="" className='w-[100%] h-[100%]' />
                        <div className='absolute mt-[-500px] h-[100%] px-10 bg-gray-900/10 hover:bg-gray-900/30'>
                            <div className='hover:mt-[-20px] duration-300'>
                                <figcaption className='text-2xl text-white mt-[90%]'>Men's Fashion</figcaption>
                            <figcaption className='text-gray-100'>Men's fashion combines style and comfort, with trends.</figcaption>
                             <button className='bg-purple-500 p-2 mt-10 w-[100%] text-white cursor-pointer'>Shop Now <i className='fa fa-arrow-right'/></button>
                            </div>
                        </div>
                    </figure>
                    <figure className='w-[100%] md:w-[30%] h-[500px] bg-gray-200 relative rounded mt-10 md:mt-0' onClick={() => navigate("/womensfashion")}>
                        <img src="/img/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated.png" alt="" className='w-[100%] h-[100%]' />
                        <div className='absolute mt-[-500px] h-[100%] px-10 bg-gray-900/10 hover:bg-gray-900/30'>
                            <div className='hover:mt-[-20px] duration-300'>
                                <figcaption className='text-2xl text-white mt-[90%]'>Women's Fashion</figcaption>
                            <figcaption className='text-gray-100'>Women's fashion blends timeless elegance with modern trends.</figcaption>
                             <button className='bg-purple-500 p-2 mt-10 w-[100%] text-white cursor-pointer'>Shop Now <i className='fa fa-arrow-right'/></button>
                            </div>
                        </div>
                    </figure>
                    <figure className='w-[100%] md:w-[30%] h-[500px] bg-gray-200 relative rounded mt-10 md:mt-0' onClick={() => navigate("/headphonefashion")}>
                        <img src="/img/young-woman-enjoying-music-headphone-through-smartphone-against-pink-background.png" alt="" className='w-[100%] h-[100%]' />
                        <div className='absolute mt-[-500px] h-[100%] px-10 bg-gray-900/10 hover:bg-gray-900/30'>
                            <div className='hover:mt-[-20px] duration-300'>
                                <figcaption className='text-2xl text-white mt-[90%]'>Headphones</figcaption>
                            <figcaption className='text-gray-100'>Headphones deliver high-quality sound directly to your ears</figcaption>
                             <button className='bg-purple-500 p-2 mt-10 w-[100%] text-white cursor-pointer'>Shop Now <i className='fa fa-arrow-right'/></button>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Categories