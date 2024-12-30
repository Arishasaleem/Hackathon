import Brand from "./brands";
import Image from "next/image";
const Ceremics = () => {
  return (
    <div className="p-4 md:p-10">
      {/* Heading */}
      <div className="mb-10"> {/* Ensure there's space below the heading */}
        <h1 className=" text-3xl md:text-4xl py-10 mt-14">
          New Ceramics
        </h1>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10"> {/* Adding margin-bottom here */}
        <Image
          src="/Product Card.png"
          width={305}height={462}
          alt="not found"
          className="w-full h-auto" 
        />

        <Image
          src="/Product Card (1).png"
          width={305}height={462}
          alt="not found"
          className="w-full h-auto"
        />

        <Image
          src="/Product Card (2).png"
          width={305}height={462}
          alt="not found"
          className="w-full h-auto"
        />

        <Image
          src="/Product Card (3).png"
          width={305}height={462}
          alt="not found"
          className="w-full h-auto"
        />
        
      </div>

      {/* Brand page from components */}
      <div>
        <Brand />
      </div>
    </div>
  );
};

export default Ceremics;