import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaSkype,
    FaTwitter,
    FaPinterestP,
  } from "react-icons/fa";
  import React from "react";
  
  const Footer2 = () => {
    return (
      <div className="flex flex-row gap-14 p-10 text-xl flex-wrap sm:flex-nowrap sm:gap-40 bg-[#2A254b] text-white px-28">
        {/* Column 1: details */}
        <div className="flex gap-4">
          <p>
            <i>Avion</i> <br /> 21 New York Street <br />
            New York City <br />
            United States of America <br />
            432 34
          </p>
        </div>
  
        {/* Social Media Links */}
        <div>
          <h1 className="mb-4 text-lg font-bold">Social Links</h1>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.skype.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaSkype size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaPinterestP size={24} />
            </a>
          </div>
        </div>
  
        {/* Column 3: Menu & Categories */}
        <div className="flex flex-col gap-8">
          <button>Menu</button>
          <button>New arrivals</button>
          <button>Best sellers</button>
          <button>Recently viewed</button>
          <button>Popular this week</button>
          <button>All products</button>
        </div>
  
        {/* Column 4: Categories */}
        <div className="flex flex-col gap-8">
          <button>Categories</button>
          <button>Crockery</button>
          <button>Furniture</button>
          <button>Homeware</button>
          <button>Plant pots</button>
          <button>Chairs</button>
          <button>Crockery</button>
        </div>
  
        {/* Column 5: Our company */}
        <div className="flex flex-col gap-8">
          <button>Our company</button>
          <button>About us</button>
          <button>Vacancies</button>
          <button>Contact us</button>
          <button>Privacy</button>
          <button>Return policy</button>
        </div>
      </div>
    );
  };
  
  export default Footer2;
  