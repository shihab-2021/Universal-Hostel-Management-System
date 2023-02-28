/* eslint-disable @next/next/no-img-element */
import React from "react";
import DashboardItem from "./Dashboard/Profile/DashboardItem";

const UserInformation = () => {
  return (
    <div className="p-5 flex gap-5 flex-col">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="px-5 card md:w-1/2 w-full flex justify-between">
          <div className="flex flex-row items-center justify-center w-full">
            <div className="w-1/2">
              <img
                src="https://i.ibb.co/PY3fMKG/pngtree-vector-avatar-icon-png-image-699747.jpg"
                className="aspect-square rounded-full max-w-[200px] w-3/4 m-auto"
                alt=""
              />
            </div>
            <div className="w-1/2 my-5 flex flex-row justify-center">
              <div className="">
                <div className="flex items-center flex-col my-1">
                  <h1 className="text-xs text-gray-500">NAME</h1>
                  <h1 className="text-lg">John Doe</h1>
                </div>
                <div className="flex items-center flex-col my-1">
                  <h1 className="text-xs text-gray-500">PHONE</h1>
                  <h1 className="text-lg">01845236798</h1>
                </div>
                <div className="flex items-center flex-col my-1">
                  <h1 className="text-xs text-gray-500">PROFESSION</h1>
                  <h1 className="text-lg">Student</h1>
                </div>
                <div className="flex items-center flex-col my-1">
                  <h1 className="text-xs text-gray-500">GENDER</h1>
                  <h1 className="text-lg">Male</h1>
                </div>
                <div className="flex items-center flex-col my-1">
                  <h1 className="text-xs text-gray-500">USER ID</h1>
                  <h1 className="text-lg">u01</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="button my-3">Modify Profile</button>
        </div>
        <div className="card w-full md:w-1/2 flex justify-between">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl underline">Current Room</h1>
            <DashboardItem first={"Room No"} second={"3"} />
            <DashboardItem first={"Room Type"} second={"Private"} />
            <DashboardItem first={"Room Category"} second={"Premium"} />
            <h1 className=" mt-5 text-xl text-indigo-500">Tk 2500 / week</h1>
          </div>
          <button className="button my-3">View Room</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="card w-full md:w-1/2 flex justify-between">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl underline">Current Meal Plan</h1>
            <DashboardItem first={"Breakfast"} second={"Package 1"} />
            <DashboardItem first={"Lunch"} second={"Package 3"} />
            <DashboardItem first={"Dinner"} second={"Package 2"} />
            <h1 className=" mt-5 text-xl text-indigo-500">Tk 1000 / week</h1>
          </div>
          <button className="button my-3">View Room</button>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
