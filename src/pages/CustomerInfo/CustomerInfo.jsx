import React, { useEffect, useState } from "react";
import Contact from "../../Components/Contact/Contact";
import { useNavigate } from "react-router-dom";

const PUBLISHABLE_RAZ_KEY = import.meta.env.VITE_RAZORPAY_PUBLISHABLE_KEY;

if (!PUBLISHABLE_RAZ_KEY) {
  throw new Error("Add your Razorpay Publishable Key to the .env file");
}

const CustomerInfo = ({ cartProduct , formData , setFormData , setCartProduct}) => {

    const navigate = useNavigate();

  // Load Razorpay script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const displayRazorpay = (e) => {
    e.preventDefault(); 
    setCartProduct([]);


    const amount =
      cartProduct.reduce(
        (acc, product) => acc + product.price * Number(product.count),
        0
      ) * 100;

    const options = {
      key: PUBLISHABLE_RAZ_KEY,
      amount: amount,
      currency: "INR",
      name: "NITRAMAX",
      description: "Test Transaction",
      handler: function (response) {
        navigate("/myorders");
        console.log(response);
        console.log("Customer Info:", formData);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "purple",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <div className="px-5 md:px-20 mt-10">
        <div className="p-2 md:px-10 text-2xl md:text-4xl text-gray-700">
          Add Shipping <span className="text-purple-700">Address</span>
        </div>
        <div className="flex justify-between flex-wrap">
          {/* Left Side - Form */}
          <div className="left-content w-[100%] md:w-[50%]">
            <form
              className="flex flex-col justify-center items-center p-2 md:p-10"
              onSubmit={displayRazorpay}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="border border-gray-300 p-2 w-[100%] h-10 mt-5"
                required
              />
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="border border-gray-300 p-2 w-[100%] h-10 mt-5"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="border border-gray-300 p-2 w-[100%] h-10 mt-5"
                required
              />
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pin code"
                className="border border-gray-300 p-2 w-[100%] h-10 mt-5"
                required
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border border-gray-300 p-2 w-[100%] h-30 mt-5"
                required
              />
              <div className="flex w-[100%] justify-between">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-[49%] border border-gray-300 p-2 h-10 mt-5"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-[49%] border border-gray-300 p-2 h-10 mt-5"
                  required
                />
              </div>
              <div className="w-[100%] mt-5 bg-purple-500">
                <button type="submit" className="w-[100%] h-10 text-white">
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="right-content w-[100%] md:w-[50%]">
            <img
              src="/img/undraw_my-location_dcug.svg"
              alt=""
              className="w-[100%] h-130"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default CustomerInfo;