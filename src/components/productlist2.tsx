import React from "react";
import Image from "next/image";


const ProductList2 = () => {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen text-[#ffffff]">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Image Left (1).png"
            alt="The Dandy Chair"
            width={721}
            height={759}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-10 text-[#2A254B]">
          {/* Title and Price */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold font-[Clash Display]">
              The Dandy Chair
            </h1>
            <p className="text-lg md:text-xl font-normal font-[Satoshi] text-[#12131A]">
              £250
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-medium font-[Clash Display]">Description</h2>
            <p className="text-sm md:text-base font-[Satoshi] text-[#505977]">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for
              any stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm md:text-base font-[Satoshi] text-[#505977]">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-medium font-[Clash Display]">Dimensions</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-2">
              <div>
                <p className="text-sm font-[Clash Display]">Height</p>
                <p className="text-sm font-[Clash Display]">110cm</p>
              </div>
              <div>
                <p className="text-sm font-[Clash Display]">Width</p>
                <p className="text-sm font-[Clash Display]">75cm</p>
              </div>
              <div>
                <p className="text-sm font-[Clash Display]">Depth</p>
                <p className="text-sm font-[Clash Display]">50cm</p>
              </div>
            </div>
          </div>

          {/* Amount and Button */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-medium">Amount:</h3>
              <div className="flex items-center border rounded-md px-3 py-1 bg-[#F9F9F9]">
                <button className="text-[#CAC6DA]">-</button>
                <span className="mx-2 text-[#CAC6DA]">-</span>
                <button className="text-[#CAC6DA]">-</button>
              </div>
            </div>
            <button className="bg-[#2A254B] text-white px-6 py-3 rounded-md mt-4 md:mt-0">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Products or Recommendations */}
      <div className="p-6 md:p-10">
        {/* Heading */}
       
        
        
        
      </div>
    </div>
  );
};

export default ProductList2;
