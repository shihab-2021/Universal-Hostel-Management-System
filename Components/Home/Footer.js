import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center flex-wrap text-center bg-[#12131c38]">
      <div className="lg:w-1/3 w-1/2 text-center mt-4 lg:my-6">
        <h1 className="text-2xl text-orange-600 font-sansita">Super</h1>
        <h1 className="text-gray-300">Hostel</h1>
      </div>
      <div className="lg:w-1/3 w-screen text-sm text-gray-500 my-4">
        <h1>Full Stack Force 2023 All Rights Reserved</h1>
      </div>
      <div className="flex lg:w-1/3 md:w-1/2 w-full justify-center items-center pb-5 lg:py-0">
        <h1 className="text-gray-300 font-bold pr-2">FOLLOW US</h1>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:bg-[#1e2124] hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 border-2 border-transparent h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaDribbble />
        </a>
      </div>
    </div>
  );
};

export default Footer;
