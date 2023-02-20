/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import useAuth from "../../Components/Firebase/useAuth";
import MainLayout from "../../Components/MainLayout/MainLayout";

const Sighup = () => {
  const { user, createUser } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const phone = form.phone.value;
    if (password !== confirm_password) {
      alert("Please enter your password correctly!");
      return;
    }

    const userData = {
      email,
      displayName,
      address,
      image: "https://i.ibb.co/DMYmT3x/Generic-Profile.jpg",
      role: "user",
      address: address,
      phone: phone,
      biography: "",
      gender: "",
      profession: "",
      birthDate: "",
    };

    createUser(email, password);
    event.preventDefault();

    fetch("https://universal-hostel-server.vercel.app/users-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log("Register successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <MainLayout>
        <div className="flex my-20 w-full items-center justify-center">
          <div className="rounded-xl bg-gray-800 bg-opacity-50 px-10 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-white font-sansita">
              <div className="mb-8 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/YNhpqnK/image-removebg-preview.png"
                  width="150"
                  alt=""
                  srcset=""
                />
                {/* <h1 className="mb-2 text-2xl">Universal Hostel</h1> */}
                <span className="text-gray-300 mt-4">Enter Signup Details</span>
              </div>
              <form style={{ minWidth: "300px" }} onSubmit={handleSubmit}>
                <div className="">
                  <label className="block text-sm text-white" for="email">
                    E-mail
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    aria-label="email"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-white">Name</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="text"
                    id="name"
                    placeholder="Name"
                    arial-label="name"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-white">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    arial-label="phone"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-white">Address</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="text"
                    id="address"
                    placeholder="Address"
                    arial-label="address"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label className="block  text-sm text-white">Password</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Password"
                    arial-label="password"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label className="block  text-sm text-white">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    arial-label="confirm_password"
                    required
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl uppercase bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-600"
                  >
                    signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Sighup;
