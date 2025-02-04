import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      {/* Header Section */}
      <div>
        <Header />
      </div>

      {/* Main Section */}
      <div className="p-3">
        {/* Header Image */}
        <div className="mb-4">
          <Image
            src="/Frame 143.png"
            width={1440} height={209}
            alt="Header Image"
            className="w-full h-auto object-cover mt-3 sm:w-full" // Ensures full width on all screen sizes
          />
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-10 md:px-20 sm:col-auto py-4 p-3">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 md:text-lg">
            <button className="px-4 py-2 text-black bg-gray-200 rounded-md">
              Category
            </button>
            <button className="px-4 py-2 text-black bg-gray-200 rounded-md">
              Product type
            </button>
            <button className="px-4 py-2 text-black bg-gray-200 rounded-md">
              Prize
            </button>
            <button className="px-4 py-2 text-black bg-gray-200 rounded-md">
              Brand
            </button>
          </div>

          {/* Sorting Section */}
          <div className="flex items-center gap-2 text-sm md:text-lg mt-4 md:mt-0">
            <span>Sorting by:</span>
            <button className="px-4 py-2 text-black bg-gray-200 rounded-md">
              Date added
            </button>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-10 md:px-20 py-8">
          {[ 
            "/Product Card (5).png", 
            "/Product Card (1).png", 
            "/Product Card (2).png", 
            "/Product Card (3).png", 
            "/Product Card (7).png", 
            "/Product Card (8).png", 
            "/Product Card (9).png", 
            "/Product Card (11).png" 
          ].map((src, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={src}
                alt={`Product Card ${index + 1}`}
                width={305} // Width for each product image
                height={462} // Height for each product image
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center mt-4 py-4">
          <button className="bg-[#F9F9F9] px-6 py-3 text-lg rounded hover:bg-gray-200">
            View Collection
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
