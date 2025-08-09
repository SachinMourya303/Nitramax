import React, { useEffect, useState } from 'react';
import '/src/Components/style.css'
import { NavLink } from 'react-router-dom';

const HeroContent = () => {

  const sliderdata = [
    {
      id: "67a1f4e43f34a77b6dde7144",
      name: "Aura",
      img: ["/img/vecteezy_samsung-galaxy-s23-ultra-transparent-image_22722945.png",
            "/img/vecteezy_stylish-mockup-of-s23-ultra-in-different-color_46792620.png",
            "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Samsung-galaxy-s24-ultra-5g-titanium-gray-1Tb-12gb-ram-Side-View.png",
            "https://www.vecteezy.com/png/57930719-classic-blue-plaid-shirt-for-men"
      ],
      quote:"In a world full of noise, stay connected to what matters.",
      offer:"Hurry up 20% off offer closes soon.",
      shopBtn:"/smartPhones",
    },
    {
      id: "67a1f5ef3f34a77b6dde9150",
      name: "Headpgone",
      img: [
        "/img/header_headphone_image.png"
      ],
      quote:"Silence the noise.Embrace the sound audio.",
      offer:"Get 40% off on first order!",
      shopBtn:"/headphones",
    },
    {
      id: "67a1f7c93f34a77b6dde915a",
      name: "MacBook Pro 16",
      img: [
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/rzri7kytphxalrm9rubd.webp"
      ],
      quote:"Your ideas deserve a faster machine, thin powerfull.",
      offer:"Explore the gadget for seemless joy.",
      shopBtn:"/laptops",
    },
    {
      id: "67a1f7c93f34a77b6ddf915a",
      name: "shirt",
      img: [
        "/img/vecteezy_classic-blue-plaid-shirt-for-men_57930719.png"
      ],
      quote:"Style isn't just what you wear, it's how you wear it.",
      offer:"Get the stylish collection now.",
      shopBtn:"/cloths",
    },
  ];
     const [index , setIndex] = useState(0);

       useEffect(() => {
        const intervel = setInterval(() => {
        setIndex((prev) => (prev + 1) % sliderdata.length);
       } , 4000)

       return () => clearInterval(intervel);
       }, [sliderdata.length])
  return(
    <div className=''>
      <div className="slider-container mt-3 flex px-5 md:px-20">
        <div className='mx-auto w-[100vw] flex flex-wrap-reverse bg-gray-200'>

          <div className="left-content flex flex-col justify-center items-center w-[100%] md:w-[50%] p-2 md:p-0">
            <label className='md:ms-5 text-center md:text-start text-purple-700 w-[100%] lg:w-[80%]'>{sliderdata[index].offer}</label>
            <label className='md:ms-5 text-center md:text-start text-4xl lg:text-5xl  font-bold text-gray-800 w-[100%] lg:w-[80%]'>{sliderdata[index].quote}</label>
            <NavLink to="/allproducts" className='md:ms-5 text-center md:text-start w-[100%] lg:w-[80%] mt-10 text-white'><button className='bg-purple-500 p-2 rounded-md w-[50%] hover:scale-105 duration-300 cursor-pointer'>Shop Now <i className='fa fa-arrow-right'/> </button></NavLink>
          </div>

          <div className="right-content flex justify-center items-center w-[100%] md:w-[50%] p-2">
            <img src={sliderdata[index].img[0]} className='slider-img w-100'/>
          </div>

        </div>
      </div>
    </div>
  )
}


export default HeroContent;
