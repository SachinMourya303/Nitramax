import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contact from '../../Components/Contact/Contact'

const Myorders = ({ myOrders, formData }) => {

    return (
        <div>
            <div className='px-5 md:px-20 mt-10'>
                {
                    formData.name == "" ? (
                        <div className='flex justify-center'>
                            <div className='w-[100%] md:w-[50%] flex justify-center flex-col'>
                                <span className='w-[100%] text-center text-gray-500 text-2xl'>No Orders Yet</span>
                                <img src="/img/undraw_empty-cart_574u.svg" alt="" className='w-[100%]' />

                                <div className='text-purple-700 w-[100%] text-center text-xl'>
                                    <NavLink to="/"><span className='fa fa-arrow-left mt-10' /> <span>Continue Shopping</span></NavLink>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex justify-between w-[100%] items-center border-b pb-5 border-gray-500'>
                                <span className='text-4xl'>My <span className='text-purple-700'>Orders</span></span>
                                <span>{myOrders.length} Items</span>
                            </div>
                            <div className='flex justify-between'>
                                <div className="left-content w-[100%] mt-10">
                                    <table className='w-[100%]'>
                                        <thead>
                                            <tr className='text-gray-700'>
                                                <th className='w-[50%] text-start font-medium'>Products Details</th>
                                                <th className='w-[50%] font-medium text-start'>Order Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                myOrders.map((items) => (
                                                    <tr key={items.id} className=''>
                                                        <td className='w-[50%] pt-10'>
                                                            <div className='flex w-[100%] items-center justify-between'>
                                                                <img src={items.img[0]} alt="" className='bg-gray-200 w-[40%] md:w-[20%] rounded' />
                                                                <div className='w-[50%] md:w-[70%]'>
                                                                    <div className='text-sm text-gray-700'>{items.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className='w-[50%] pt-10'>
                                                            <div className='text-start w-[100%] text-gray-500 text-sm'>
                                                                <div>Order ID : {items.id}</div>
                                                                <div>Name : {formData.name}</div>
                                                                <div>Address : {formData.address}</div>
                                                                <div>Email : {formData.email}</div>
                                                                <div>Price : {items.price}</div>
                                                                <div>Qty : {items.count}</div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="4">
                                                    <div className='text-purple-700 w-[100%] flex mt-10'>
                                                        <NavLink to="/" className="flex items-center space-x-2">
                                                            <i className='fa fa-arrow-left'></i>
                                                            <span>Continue Shopping</span>
                                                        </NavLink>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Contact />
        </div >
    )
}

export default Myorders
