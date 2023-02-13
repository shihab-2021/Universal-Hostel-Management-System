import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center flex-wrap text-center bg-orange-50">
      <div className="lg:w-1/3 w-1/2 text-center mt-4 lg:my-6">
        <h1 className="text-2xl text-orange-600 font-sansita">Super</h1>
        <h1>Hostel</h1>
      </div>
      <div className="lg:w-1/3 w-screen text-sm text-gray-500 my-4">
        <h1>Full Stack Force 2023 All Rights Reserved</h1>
      </div>
      <div className="flex lg:w-1/3 w-1/2 justify-center items-center pb-5 lg:py-0">
        <h1 className="text-gray-800 font-bold pr-2">FOLLOW US</h1>
        <a
          href="#"
          className="bg-yellow-300 h-fit w-fit p-3 rounded-full text-gray-800 mx-1"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="bg-yellow-300 h-fit w-fit p-3 rounded-full text-gray-800  mx-1"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-yellow-300 h-fit w-fit p-3 rounded-full text-gray-800  mx-1"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="bg-yellow-300 h-fit w-fit p-3 rounded-full text-gray-800  mx-1"
        >
          <FaDribbble />
        </a>
      </div>
    </div>
  );
};

export default Footer;
