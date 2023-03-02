/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import DashboardItem from "./Dashboard/Profile/DashboardItem";
import useAuth from "./Firebase/useAuth";

const UserInformation = () => {
  const { userInfo } = useAuth();
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="px-5 card xl:w-1/2 w-full flex justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <div className="sm:w-1/2">
              <img
                src={userInfo?.image}
                className="aspect-square object-cover rounded-full max-w-[200px]  m-auto"
                alt=""
              />
            </div>
            <div className="sm:w-1/2 my-5 flex flex-row justify-center">
              <div className="">
                <div className="flex items-center md:items-start flex-col my-1">
                  <h1 className="text-xs text-gray-500">NAME</h1>
                  <h1 className="text-lg">{userInfo?.displayName}</h1>
                </div>
                <div className="flex items-center md:items-start flex-col my-1">
                  <h1 className="text-xs text-gray-500">PHONE</h1>
                  <h1 className="text-lg">
                    {userInfo?.phone && userInfo?.phone}
                    {!userInfo?.phone && "Not added"}
                  </h1>
                </div>
                <div className="flex items-center md:items-start flex-col my-1">
                  <h1 className="text-xs text-gray-500">PROFESSION</h1>
                  <h1 className="text-lg">
                    {userInfo?.profession && userInfo?.profession}
                    {!userInfo?.profession && "Not added"}
                  </h1>
                </div>
                <div className="flex items-center md:items-start flex-col my-1">
                  <h1 className="text-xs text-gray-500">GENDER</h1>
                  <h1 className="text-lg">
                    {userInfo?.gender && userInfo?.gender}
                    {!userInfo?.gender && "Not added"}
                  </h1>
                </div>
                <div className="flex items-center md:items-start flex-col my-1">
                  <h1 className="text-xs text-gray-500">Email</h1>
                  <h1 className="text-lg">{userInfo?.email}</h1>
                </div>
              </div>
            </div>
          </div>
          <Link href="/dashboard/updateProfile">
            <button className="button my-3">Modify Profile</button>
          </Link>
        </div>
        <div className="card w-full xl:w-1/2 flex justify-between">
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
