import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import productList from '/src/data.js'
import { Toaster , toast } from 'react-hot-toast';
import Contact from '../../Components/Contact/Contact';

const ProductDetails = ({setCartProductId , isSignedIn}) => {

    const { id } = useParams();

    const [productInfo, setProductInfo] = useState(null);
    const [changeindex, setChangeIndex] = useState(0);
    const [releated, setReleated] = useState([]);

    useEffect(() => {
        const finddata = productList.find((items) => items.id === id);
        setProductInfo(finddata);

        if (finddata) {
            const findReleated = productList.filter((items) => items.category === finddata.category);
            setReleated(findReleated);
        }
    }, [id])

     const sendIdToCartId = (id) => {
        if(isSignedIn){
           setCartProductId(id);
            toast("Added to Cart");
        }
        else{
            toast("Signin first" , {
                style:{color:"red"}
            }
            );
        }
      }

      const navigate = useNavigate();
      const sendIdToCartIdtoBuy = (id) => {
        if(isSignedIn){
           setCartProductId(id);
            toast("Added to Cart");
            navigate("/cart");
        }
        else{
            toast("Signin first", {
                style:{color:"red"}
            });
        }
      }


    if (!productInfo) {
        return <div className='text-center mt-10 text-xl text-gray-500'>Loading product details...</div>;
    }
    return (
        <div>
            <div className='px-5 md:px-20 mt-5'>
            <Toaster/>
            <div className='text-gray-700'><NavLink to="/">Home</NavLink> ❯ <NavLink to="/allproducts">Allproducts</NavLink> ❯ <NavLink to="/productdetails">ProductDetails</NavLink></div>
            <div className='w-[100%] flex justify-center flex-wrap mt-5'>
                <div className="left-content w-[100%] md:w-[50%] flex justify-center items-center">
                    {
                        <div className='flex flex-col'>
                            <div className='w-[100%] md:w-[70%] bg-gray-200 rounded'>
                                <img src={productInfo.img[changeindex]} alt="" className='w-[100%]' />
                            </div>

                            <div className='flex gap-4 mt-3'>
                                {
                                    productInfo.img.map((src, index) => (
                                        <img key={index} src={src} className="w-[15%] rounded shadow-sm object-contain bg-gray-200 cursor-pointer" onClick={() => setChangeIndex(index)} />
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>

                <div className="right-content flex w-[100%] md:w-[50%] justify-center items-center text-gray-800 mt-5 md:mt-0">
                    <div className='flex flex-col justify-around gap-5'>
                        <label className='text-4xl'>{productInfo.name}</label>
                        <label className='text-xl'><span className='text-purple-700'>{productInfo.ratings}</span><span className='text-purple-400'>{productInfo.noratings}</span></label>
                        <label className='text-gray-500'>{productInfo.description}</label>
                        <label className='text-4xl'>₹{productInfo.price}</label>

                        <div className='border-t border-gray-300'>

                            <div className='mt-5'>
                                <label className='flex w-[50%]'><span>Brand</span><span className='text-gray-500 ms-auto w-[50%]'>{productInfo.brand}</span></label>
                                <label className='flex w-[50%]'><span>Color</span><span className='text-gray-500 ms-auto w-[50%]'>{productInfo.color}</span></label>
                                <label className='flex w-[50%]'><span>Category</span><span className='text-gray-500 ms-auto w-[50%]'>{productInfo.category}</span></label>
                            </div>
                        </div>

                        <div className='flex justify-between mt-5'>
                            <button type='button' className='w-[49%] p-2 text-xl bg-gray-200' onClick={() => sendIdToCartId(productInfo.id)}>Add to Cart</button>
                            <button type='button' className='w-[49%] p-2 text-xl bg-purple-500' onClick={() => sendIdToCartIdtoBuy(productInfo.id)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <label className='text-2xl flex flex-col justify-center md:justify-start w-[100%]'>
                    <span className='text-gray-700'>Releated Products</span>
                    <span className='animation-bar bg-purple-700'></span>
                </label>
                <div className='flex flex-wrap gap-4 mt-5 justify-center md:justify-start'>
                    {
                        releated.map((items) => {
                            return (
                                <div key={items.id}>
                                    <div className='w-35 lg:w-60 '>
                                        <figure className='bg-gray-100 rounded flex h-35 md:h-60 p-2'>
                                            <NavLink to={`/productdetails/${items.id}`} className="w-[100%]">
                                                <img src={items.img[0]} alt="" className='w-[100%] h-[100%] hover:scale-105 duration-300 cursor-pointer relative' />
                                            </NavLink>
                                            <figcaption className='absolute'><span className='fa-solid fa-heart py-2 rounded-xl m-2 bg-white h-8 w-8 text-center text-gray-400 hover:text-red-500'></span></figcaption>
                                        </figure>
                                        <figcaption className='text-gray-700'>{items.name.slice(0,20)}</figcaption>
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
        </div>
        <Contact/>
        </div>
    )
}

export default ProductDetails