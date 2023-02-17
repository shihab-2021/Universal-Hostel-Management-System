import Head from "next/head";
import React from "react";

const MainPayment = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="p-5 ">
        <div className="">
          <div className="px-3 md:w-1/2 pt-5 pb-10 mx-auto">
            <h1 className="flex justify-between text-2xl">
              <span>Room rent </span>
              <span> $500</span>
            </h1>
            <h1 className="flex justify-between text-2xl">
              <span>Meal fee </span>
              <span> $350</span>
            </h1>
            <h1 className="flex justify-between text-2xl">
              <span>Laundry fee </span>
              <span> $100</span>
            </h1>
            <hr />
            <h1 className="flex justify-between text-2xl">
              <span>Total </span>
              <span> $950</span>
            </h1>
          </div>
          <div className=" card">
            <form action="">
              <div className="flex flex-col md:flex-row">
                <div className="px-3 md:w-1/2">
                  <h3 className="pb-5 text-3xl font-bold ">Billing Address</h3>
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
                  </div>
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
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    className="w-full p-3 mb-4 border rounded mt-1"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="flex flex-col md:flex-row">
                    <div className="md:pr-2 md:w-1/2">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        className="w-full p-3 mb-4 border rounded mt-1"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
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
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label className="p-3">
                <input type="checkbox" name="sameadr" /> Shipping address same
                as billing
              </label>
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
