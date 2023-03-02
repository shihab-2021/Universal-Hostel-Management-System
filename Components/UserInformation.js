/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import DashboardItem from "./Dashboard/Profile/DashboardItem";
import useAuth from "./Firebase/useAuth";
import Link from "next/link";
const UserInformation = () => {
  const { userInfo } = useAuth();

  const [bookedOn, setBookedOn] = useState("");
  const [bookedTill, setBookedTill] = useState("");

  useEffect(() => {
    const date1 = new Date(userInfo.bookedOn);
    setBookedOn(date1.toDateString());

    const date2 = new Date(userInfo.bookedTill);
    setBookedTill(date2.toDateString());
  }, [userInfo.room]);

  const cancelRoom = () => {
    if (
      confirm(
        "Are you sure you want to cancel your room subscription? You will lose access to your room and meal plan if you select OK!"
      )
    ) {
      fetch("http://localhost:5000/cancelRoom", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          roomId: userInfo.room._id,
          currentUser: userInfo._id,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="px-5 card xl:w-1/2 w-full flex justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <div className="sm:w-1/2">
              <img
                src={userInfo.image}
                className="aspect-square rounded-full max-w-[200px] w-3/4 m-auto"
                alt=""
              />
            </div>
            <div className="sm:w-1/2 my-5 flex flex-row justify-center">
              <div className="">
                {userInfo.displayName && (
                  <div className="flex items-center flex-col my-1">
                    <h1 className="text-xs text-gray-500">NAME</h1>
                    <h1 className="text-lg">{userInfo.displayName}</h1>
                  </div>
                )}

                {userInfo.phone && (
                  <div className="flex items-center flex-col my-1">
                    <h1 className="text-xs text-gray-500">PHONE</h1>
                    <h1 className="text-lg">{userInfo.phone}</h1>
                  </div>
                )}

                {userInfo.email && (
                  <div className="flex items-center flex-col my-1">
                    <h1 className="text-xs text-gray-500">EMAIL</h1>
                    <h1 className="text-lg">{userInfo.email}</h1>
                  </div>
                )}

                {userInfo.gender && (
                  <div className="flex items-center flex-col my-1">
                    <h1 className="text-xs text-gray-500">GENDER</h1>
                    <h1 className="text-lg">{userInfo.gender}</h1>
                  </div>
                )}

                {userInfo.profession && (
                  <div className="flex items-center flex-col my-1">
                    <h1 className="text-xs text-gray-500">PROFESSION</h1>
                    <h1 className="text-lg">{userInfo.profession}</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link href="/dashboard/updateProfile">
            <button className="button my-3">Modify Profile</button>
          </Link>
        </div>

        <div className="card w-full md:w-1/2 flex justify-between">
          <h1 className="text-3xl underline">Current Room</h1>
          {userInfo.room ? (
            <>
              <div className="flex flex-col items-center">
                <DashboardItem
                  first={"Room No"}
                  second={userInfo.room.roomNo}
                />
                <DashboardItem
                  first={"Room Type"}
                  second={
                    userInfo.room.category === "Business" ? "Private" : "Shared"
                  }
                />
                <DashboardItem first={"Branch"} second={userInfo.room.branch} />
                <h1 className=" mt-5 text-xl text-indigo-500">
                  {bookedOn} - {bookedTill}
                </h1>
              </div>
              <div>
                <Link href={`/rooms/${userInfo.room._id}`}>
                  <button className="button my-3 mx-2">View Room</button>
                </Link>
                <button
                  className="button my-3 mx-2 border-red-500 text-red-500 hover:bg-red-500"
                  onClick={cancelRoom}
                >
                  Cancel Room
                </button>
              </div>
            </>
          ) : (
            <h1 className="text-lg">NO ROOM SELECTED!</h1>
          )}
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
