/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HelloSection = () => {
  return (
    <div className="h-auto md:h-screen w-screen flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2 h-full">
        <img
          src="https://i.ibb.co/Kyx4Zps/image.png"
          sizes="100vw"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 h-full p-16 flex flex-col justify-center">
        <h1 className=" text-orange-500 text-7xl italic font-bold">Hello!</h1>
        <p className="text-gray-500 font-semibold py-5 mb-6">WELCOME THERE!</p>
        <p className="text-gray-500 md:w-3/4">
          Our hostel is located in the citys finest and trendiest district.
          Everyone who is interested in being a part of the creative and
          cutting-edge world that is New York, you are welcome to CityHostel for
          the best experience.
        </p>
        <Link
          href="/about-us"
          className="transition duration-300 w-fit p-3 px-5 bg-gray-700 text-white font-bold mt-8 hover:bg-orange-500 "
        >
          MORE ABOUT US
        </Link>
      </div>
    </div>
  );
};

export default HelloSection;
