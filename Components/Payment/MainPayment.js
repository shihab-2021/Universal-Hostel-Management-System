import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useAuth from "../Firebase/useAuth";

const MainPayment = ({ room }) => {
  const { user, userInfo } = useAuth();
  const router = useRouter();
  const handleSubmit = (event) => {
    if (userInfo) {
      if (window.confirm("Are you sure you want to select this room?")) {
        if (room?.category === "Business") {
          if (Object.keys(userInfo?.room).length == 0) {
            fetch("https://universal-hostel-api.onrender.com/rooms", {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                roomId: room._id,
                currentUser: userInfo._id,
              }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          } else {
            window.alert("You already have a booked room!");
          }
        } else {
          if (Object.keys(userInfo?.room).length == 0) {
            fetch("https://universal-hostel-api.onrender.com/rooms", {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                roomId: room._id,
                currentUser: userInfo._id,
              }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          } else {
            window.alert("You already have a booked room!");
          }
        }
      }
      if (Object.keys(userInfo?.room).length == 0) {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const uid = userInfo?._id;

        let time = new Date();
        const date = new Date().toLocaleDateString();
        const currentTime = time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        const paymentData = {
          email,
          uid,
          due: 0,
          rent: 0,
          advance: 5000,
          paymentHistory: [
            {
              time: time,
              amount: parseInt(room.cost) + 5000,
            },
          ],
        };
        console.log(paymentData);
        event.preventDefault();

        fetch("https://universal-hostel-api.onrender.com/payment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              alert("Payment successfully!");
              form.reset();
              router.replace("/dashboard");
            }
          })
          .catch((error) => console.error(error));
      } else {
        window.alert("You already have a booked room!");
      }
    } else {
      window.alert("User not found! Please refresh the page and try again.");
    }
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="py-5 px-3 container mx-auto my-10">
        <div className="">
          {/* <div className="px-3 md:w-1/2 pt-5 pb-10 mx-auto">
            <h1 className="flex justify-between text-2xl">
              <span>Advance Fee </span>
              <span>
                5000 <span className=" text-orange-500">Tk</span>
              </span>
            </h1>
            <h1 className="flex justify-between text-2xl">
              <span>Room rent </span>
              <span>
                {room?.cost} <span className=" text-orange-500">Tk</span>
              </span>
            </h1>
            <hr className="my-1" />
            <h1 className="flex justify-between text-2xl">
              <span>Total </span>
              <span>
                {parseInt(room?.cost) + 5000}{" "}
                <span className=" text-orange-500">Tk</span>
              </span>
            </h1>
          </div> */}
          <div className=" card">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="px-3 md:w-1/2 w-full">
                  <h3 className="pb-5 text-3xl font-bold ">Billing</h3>
                  <div className="px-3 w-full pt-5 pb-10 mx-auto">
                    <h1 className="flex justify-between text-2xl">
                      <span>Advance Fee </span>
                      <span>
                        5000 <span className=" text-orange-500">Tk</span>
                      </span>
                    </h1>
                    <h1 className="flex justify-between text-2xl">
                      <span>Room rent </span>
                      <span>
                        {room?.cost}{" "}
                        <span className=" text-orange-500">Tk</span>
                      </span>
                    </h1>
                    <hr className="my-1" />
                    <h1 className="flex justify-between text-2xl">
                      <span>Total </span>
                      <span>
                        {parseInt(room?.cost) + 5000}{" "}
                        <span className=" text-orange-500">Tk</span>
                      </span>
                    </h1>
                  </div>
                  <div>
                    <p className="text-xl">
                      We take 5000Tk advance fee for security purpose. We give
                      room rent in pre-paid system. So to book room you have to
                      pay in total {parseInt(room?.cost) + 5000}
                      <span className=" text-orange-500">Tk</span>. Please fill
                      up the form to book room, and good luck.
                    </p>
                  </div>
                  {/* <h3 className="pb-5 text-3xl font-bold ">Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />
                  <div className="flex flex-col md:flex-row">
                    <div className="md:pr-2 md:w-1/2">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="md:pl-2 md:w-1/2">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div> */}
                </div>
                <div className="px-3 md:w-1/2">
                  <h3 className="pb-5 text-3xl font-bold ">Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i
                      className="fa fa-cc-visa p-2 rounded-l bg-white"
                      style={{ color: "navy" }}
                    ></i>
                    <i
                      className="fa fa-cc-amex p-2 bg-white"
                      style={{ color: "blue" }}
                    ></i>
                    <i
                      className="fa fa-cc-mastercard p-2 bg-white"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover p-2 rounded-r bg-white"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                    required
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    required
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <select
                    name="expmonth"
                    className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg "
                  >
                    <option className="hidden">Select Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  {/* <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    required
                  /> */}
                  <div className="flex flex-col md:flex-row">
                    <div className="md:pr-2 md:w-1/2">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                        required
                      />
                    </div>
                    <div className="md:pl-2 md:w-1/2">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <label className="p-3">
                <input type="checkbox" name="sameadr" /> Shipping address same
                as billing
              </label> */}
              <input
                type="submit"
                value="Continue to checkout"
                className="btn  uppercase transition duration-300 bg-gray-700 font-bold hover:bg-orange-500"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPayment;
