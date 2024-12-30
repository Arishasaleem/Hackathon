import React from "react";
import Navbar from "@/components/header";
import Product from "@/components/product";
import Footer from "@/components/footer";
import Image from "next/image";
import Brand from "@/components/brands";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full py-10 px-6 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          A brand built on the love of craftsmanship, <br />
          quality, and outstanding customer service
        </h1>
      </div>

      {/* Story Section */}
      <div className="px-10">
        <Product />
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-6 py-10 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <Image 
            src="/Image (1).png" 
            alt="Service" 
            className="w-full h-auto"
            width={109} 
            height={134} 
          />
        </div>
        <div className="border-2 w-full md:w-1/2 p-6 md:p-12 bg-gray-50">
          <h2 className="text-xl md:text-2xl text-custom-purple font-semibold">
            Our service is not just personal, it is actually <br /> hyper personally exquisite



</h2>
<p className="text-custom-purple mt-6">
  When we started Avion, the idea was simple: Make high-quality furniture
  affordable and available for the mass market.
</p>
<p className="mt-4">
  Handmade, and lovingly crafted furniture and homeware is what we live,
  breathe, and design. Our Chelsea boutique became the hub for the London
  interior design community.
</p>
<button className="bg-white h-12 w-40 rounded-sm mt-8 text-custom-purple border border-custom-purple hover:bg-gray-100">
  Get in Touch
</button>
</div>
</div>

{/* Features Section */}
 < Brand/>
{/* Newsletter Section */}
<div className="w-full h-auto bg-gray-100 py-12">
<div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-md">
<h2 className="text-center text-custom-purple text-2xl font-semibold">
  Join the club and get the benefits
</h2>
<p className="text-center text-custom-purple mt-6 text-sm md:text-base">
  Sign up for our newsletter and receive exclusive offers on new ranges, sales,
  pop-up stores, and more.
</p>
<div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
  <input
    type="email"
    placeholder="you@gmail.com"
    className="bg-gray-100 w-80 h-12 px-4 rounded-md focus:ring-2 focus:ring-custom-purple"
  />
  <button className="bg-custom-purple h-12 w-32 rounded-md text-white hover:bg-purple-600">
    Sign Up
  </button>
</div>
</div>
</div>

<Footer />
</div>
);
}

export default About
