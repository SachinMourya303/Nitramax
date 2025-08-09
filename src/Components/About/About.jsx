import React from 'react'

const About = () => {
    return (
        <div>
            <div className='px-5 md:px-20 mt-10 bg-gray-100 rounded-t-4xl'>
                <div className='flex flex-col w-[100%]'>
                    <span className='w-[100%] text-center text-2xl mt-5 text-gray-700'>How It Work's</span>
                    <div className='p-5 mt-5'>

                        <div className='flex justify-center'>
                            <div className='flex w-[100%] mt-5 flex-wrap justify-between'>
                                <figure className='text-center flex flex-col justify-center items-center w-[100%] md:w-[23%] mt-5'>
                                    <span className='w-[100%] text-center text-gray-500'>Select Product</span>
                                    <img src="/img/undraw_mobile-apps_p0aa.svg" alt="" className='w-[100%] h-70 md:h-50 border-gray-200 rounded-md p-4 hover:scale-105 cursor-pointer duration-300' />
                                    <figcaption className='bg-purple-500 rounded-4xl w-10 h-10 flex items-center justify-center'>1</figcaption>
                                </figure>
                                <figure className='text-center flex flex-col justify-center items-center w-[100%] md:w-[23%] mt-5'>
                                    <span className='w-[100%] text-center text-gray-500'>Add Address</span>
                                    <img src="/img/undraw_my-location_dcug.svg" alt="" className='w-[100%] h-70 md:h-50 border-gray-200 rounded-md p-4 hover:scale-105 cursor-pointer duration-300' />
                                    <figcaption className='bg-purple-500 rounded-4xl w-10 h-10 flex items-center justify-center'>2</figcaption>
                                </figure>
                                <figure className='text-center flex flex-col justify-center items-center w-[100%] md:w-[23%] mt-5'>
                                    <span className='w-[100%] text-center text-gray-500'>Make Payment</span>
                                    <img src="/img/undraw_stripe-payments_jxnn.svg" alt="" className='w-[100%] h-70 md:h-50 border-gray-200 rounded-md p-4 hover:scale-105 cursor-pointer duration-300' />
                                    <figcaption className='bg-purple-500 rounded-4xl w-10 h-10 flex items-center justify-center'>3</figcaption>
                                </figure>
                                <figure className='text-center flex flex-col justify-center items-center w-[100%] md:w-[23%] mt-5'>
                                    <span className='w-[100%] text-center text-gray-500'>Delivered</span>
                                    <img src="/img/undraw_on-the-way_ahi2.svg" alt="" className='w-[100%] h-70 md:h-50 border-gray-200 rounded-md p-4 hover:scale-105 cursor-pointer duration-300' />
                                    <figcaption className='bg-purple-500 rounded-4xl w-10 h-10 flex items-center justify-center'>4</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About