import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contact from '../../Components/Contact/Contact'

const Cart = ({ cartProduct, setCartProduct }) => {

    const incrementHandler = (id) => {
        setCartProduct((prev) =>
            prev.map((items) =>
                items.id === id ? { ...items, count: Number(items.count + 1) } : items
            )
        )
    }

    const decrementHandler = (id) => {
        setCartProduct((prev) =>
            prev.map((items) =>
                items.id === id ? { ...items, count: Math.max(Number(items.count - 1), 1) } : items
            )
        )
    }

    const removeHandler = (id) => {
        const removeFilter = cartProduct.filter((items) => items.id !== id)
        setCartProduct(removeFilter);
    }

     const navigate = useNavigate();

    return (
        <div>
            <div className='px-5 md:px-20 mt-10'>
                {
                    cartProduct.length > 0 ? (
                        <div>
                            <div className='flex justify-between w-[100%] md:w-[65%] items-center border-b pb-5 border-gray-500'>
                                <span className='text-4xl'>My Cart</span>
                                <span>{cartProduct.length} Items</span>
                            </div>
                            <div className='flex justify-between flex-wrap'>
                                <div className="left-content w-[100%] md:w-[70%] mt-10">
                                    <table className='w-[100%]'>
                                        <thead>
                                            <tr className='text-gray-700'>
                                                <th className='w-[40%] text-start font-medium'>Products Details</th>
                                                <th className='w-[20%] font-medium text-center'>Price</th>
                                                <th className='w-[20%] font-medium text-center'>Qty</th>
                                                <th className='w-[20%] font-medium text-center'>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartProduct.map((items) => (
                                                    <tr key={items.id}>
                                                        <td className='w-[40%] pt-10'>
                                                            <div className='flex w-[100%] items-center justify-between'>
                                                                <img src={items.img[0]} alt="" className='bg-gray-200 w-[40%] md:w-[20%] rounded' />
                                                                <div className='w-[50%] md:w-[70%]'>
                                                                    <div className='text-sm text-gray-700'>{items.name}</div>
                                                                    <button className='text-sm text-red-500' onClick={() => removeHandler(items.id)}>Remove</button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className='pt-10'>
                                                            <div className='w-[100%] text-center text-gray-500'>₹ {items.price}</div>
                                                        </td>

                                                        <td className='w-[20%] pt-10'>
                                                            <div className='w-[100%] flex justify-center'>
                                                                <div className='w-[50%] flex justify-between'>
                                                                    <button className='text-gray-400' onClick={() => decrementHandler(items.id)}>◄</button>
                                                                    <span className='px-1 md:px-0'>{items.count}</span>
                                                                    <button className='text-gray-400' onClick={() => incrementHandler(items.id)}>►</button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className='pt-10'>
                                                            <div className='text-center w-[100%] text-gray-500'>
                                                                ₹ {items.count * items.price}
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

                                <div className="right-content w-[100%] md:w-[30%]">
                                    <div className='w-[100%] flex flex-col bg-gray-100 p-5'>
                                        <div className='text-2xl border-b pb-5 border-gray-400'>Order Summary</div>
                                        <div className='text-gray-700 flex justify-between mt-5'>
                                            <span>Total Products</span>
                                            <span className='font-medium'>{cartProduct.length}</span>
                                        </div>
                                        <div className='text-gray-700 flex justify-between mt-5'>
                                            <span>Delivery</span>
                                            <span className='font-medium'>Free</span>
                                        </div>

                                        <div className='text-gray-700 flex justify-between mt-5'>
                                            <span>Total Amount</span>
                                            <span className='font-medium'>₹ {cartProduct.reduce((acc, product) => acc + product.price * Number(product.count), 0)}</span>
                                        </div>

                                        <div className='w-[100%] flex'>
                                            <button className='bg-purple-500 w-[100%] mt-5 p-5 text-white' onClick={() => navigate("/shipping")}>PROCESS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex justify-center'>
                            <div className='w-[100%] md:w-[50%] flex justify-center flex-col'>
                                <span className='w-[100%] text-center text-gray-500 text-2xl'>Your Cart Is Empty</span>
                                <img src="/img/undraw_shopping-app_b80f.png" alt="" className='w-[100%]' />

                                <div className='text-purple-700 w-[100%] text-center text-xl'>
                                    <NavLink to="/"><span className='fa fa-arrow-left mt-10' /> <span>Continue Shopping</span></NavLink>
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

export default Cart
