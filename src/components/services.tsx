import Image from "next/image"


const Services = () => {
    return (
    <div>

  {/* Popular Products Section */}
  <div className="w-full bg-[#ffffff] py-16 mt-16">
        {/* Heading */}
        <h1 className="ml-10 font-[Clash Display] font-normal text-3xl lg:text-4xl text-[#2A254B] mb-20">
          Our Popular Products
        </h1>

        {/* Images Section in one row */}
        <div className="flex flex-row gap-8 justify-center mt-8">
          <div className="w-full sm:w-1/2 lg:w-[620px]">
            <Image
              src="/Product Card (4).png"
              alt="Popular Product 1"
              width={620}
              height={462}
              className="object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-[305px]">
            <Image
              src="/Product Card (5).png"
              alt="Popular Product 2"
              width={305}
              height={462}
              className="object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-[305px]">
            <Image
              src="/Product Card (6).png"
              alt="Popular Product 3"
              width={305}
              height={462}
              className="object-cover"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#F9F9F9] px-6 py-3 text-lg rounded hover:bg-gray-200">
            View Collection
          </button>
        </div>
      </div>



</div>
    );
  };
  
  export default Services;