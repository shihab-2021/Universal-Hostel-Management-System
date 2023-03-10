/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import DashboardItem from "./Dashboard/Profile/DashboardItem";
import useAuth from "./Firebase/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
const UserInformation = () => {
  const { userInfo } = useAuth();

  const [bookedOn, setBookedOn] = useState("");
  const [bookedTill, setBookedTill] = useState("");
  const [allMeals, setAllMeals] = useState([]);
  const [currentUserPayment, setCurrentUserPayment] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetch("https://universal-hostel-api.onrender.com/meals")
      .then((res) => res.json())
      .then((data) => setAllMeals(data));

    const date1 = new Date(userInfo.bookedOn);
    setBookedOn(date1.toDateString());

    const date2 = new Date(userInfo.bookedTill);
    setBookedTill(date2.toDateString());

    fetch(`https://universal-hostel-api.onrender.com/payments/${userInfo._id}`)
      .then((res) => res.json())
      .then((data) => setCurrentUserPayment(data));
  }, [userInfo?.room]);

  const breakfast = allMeals.filter((e) => {
    return e.time == "Breakfast";
  });

  const lunch = allMeals.filter((e) => {
    return e.time == "Lunch";
  });

  const dinner = allMeals.filter((e) => {
    return e.time == "Dinner";
  });

  let total = 0;

  allMeals.map((meal) => {
    meal.bookedBy.map((user) => {
      if (user.uid == userInfo._id) {
        total = total + parseInt(meal.cost);
      }
    });
  });

  const cancelRoom = () => {
    swal({
      title: "Are you sure?",
      text: "Once canceled you will lose access to your room and meal plan if you select OK!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://universal-hostel-api.onrender.com/cancelRoom", {
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
          .then((data) => {
            if (data.acknowledged) {
              swal("Room has been removed!", {
                icon: "success",
              });
            }
          });
      }
    });
  };

  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  const p = parseInt(((5000 - parseInt(currentUserPayment?.due)) / 5000) * 100);
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="px-5 card xl:w-1/2 w-full flex justify-between">
          <h1 className="text-3xl underline mb-3">Profile</h1>
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
          <div className="h-full flex flex-col justify-between">
            <h1 className="text-3xl underline mb-3">
              Tomorrow{"'"}s Meal Plan
            </h1>
            <div className="flex flex-col items-center">
              {breakfast?.map((meal) => {
                idx1++;
                return meal?.bookedBy.map((user) => {
                  if (user?.uid == userInfo?._id) {
                    return (
                      <DashboardItem
                        first={"Breakfast"}
                        second={`Package - ${idx1}`}
                        key={meal?._id}
                      />
                    );
                  }
                });
              })}

              {lunch?.map((meal) => {
                idx2++;
                return meal?.bookedBy?.map((user) => {
                  if (user?.uid == userInfo?._id) {
                    return (
                      <DashboardItem
                        first={"Lunch"}
                        second={`Package - ${idx2}`}
                        key={meal?._id}
                      />
                    );
                  }
                });
              })}

              {dinner?.map((meal) => {
                idx3++;
                return meal?.bookedBy?.map((user) => {
                  if (user?.uid == userInfo?._id) {
                    return (
                      <DashboardItem
                        first={"Dinner"}
                        second={`Package - ${idx3}`}
                        key={meal?._id}
                      />
                    );
                  }
                });
              })}
            </div>

            {total === 0 && (
              <div className="h-full flex items-center justify-center">
                <h1 className="text-2xl py-10 self-center uppercase ">
                  No meal selected!
                </h1>
              </div>
            )}
            {total !== 0 && (
              <h1 className=" mt-5 text-xl text-center text-indigo-500 mb-7">
                Tk {total} / day
              </h1>
            )}
          </div>
          <Link href={"/meal"}>
            <button className="button my-3">View Meal Plan</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className=" bg-[#36393e52] p-[0.75rem] rounded-[0.5rem] w-full md:w-1/2">
          <h1 className="text-3xl text-center underline mb-5">Accounts</h1>
          <div className="w-full text-xs sm:text-sm font-bold md:text-base">
            <div className="flex">
              <h1 className="w-1/2">
                Rent Dues: {currentUserPayment ? currentUserPayment.rent : 0}Tk
              </h1>
              <h1 className="w-1/2">
                Meal Dues: {currentUserPayment ? currentUserPayment.due : 0}Tk
              </h1>
            </div>
            <div className="flex">
              <h1 className="w-1/2 text-red-500">
                Total Dues:{" "}
                {currentUserPayment
                  ? parseInt(currentUserPayment.rent) +
                    parseInt(currentUserPayment.due)
                  : 0}
                Tk
              </h1>
              <h1 className="w-1/2 text-green-500">
                Advance payed:{" "}
                {currentUserPayment ? currentUserPayment.advance : 0}
                Tk
              </h1>
            </div>
            {currentUserPayment && (
              <div className="flex items-center w-[250px] text-cyan-500">
                Percentage:{" "}
                <span className="mx-2 text-xs sm:text-sm font-bold md:text-base">
                  {" "}
                  {p}%
                </span>
                <div className="relative w-full">
                  <div className="w-full bg-gray-200 rounded-sm h-2">
                    <div
                      className="bg-teal-400 h-2 rounded-sm"
                      // className="bg-cyan-600 h-2 rounded-sm"
                      style={{ width: `${p}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="">
            {currentUserPayment && (
              <div className="overflow-x-auto mt-2 mb-4 rounded-lg h-60 border border-gray-700">
                <div className="align-middle inline-block min-w-full">
                  <div className="shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 text-white">
                      <thead className=" bg-[#36393e52]">
                        <tr>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="p-4 text-right text-xs font-medium text-white uppercase tracking-wider"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" bg-[#36393e52]">
                        {currentUserPayment?.paymentHistory?.map(
                          (singlePay, i) => {
                            const payDate = new Date(singlePay?.date);
                            return (
                              <tr
                                className={`${!(i % 2) && "bg-[#36393e82]"}`}
                                key={i}
                              >
                                <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                  {payDate.toDateString()}
                                </td>
                                <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                                  {singlePay?.time}
                                </td>
                                <td className="p-4 text-right whitespace-nowrap text-sm font-semibold text-white">
                                  {singlePay?.amount}Tk
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card w-full xl:w-1/2 flex justify-between min-h-[415px]">
          <h1 className="text-3xl underline mb-3">Current Room</h1>
          {userInfo?.room?._id && (
            <>
              <div className="flex flex-col items-center">
                <DashboardItem
                  first={"Room No"}
                  second={userInfo?.room?.roomNo}
                />
                <DashboardItem
                  first={"Room Type"}
                  second={
                    userInfo?.room?.category === "Business"
                      ? "Private"
                      : "Shared"
                  }
                />
                <DashboardItem
                  first={"Branch"}
                  second={userInfo?.room?.branch}
                />

                <DashboardItem first={"From"} second={bookedOn} />
                <DashboardItem first={"Till"} second={bookedTill} />
                {/* <h1 className=" mt-5 text-xl text-indigo-500">
                  {bookedOn} - {bookedTill}
                </h1> */}
              </div>
              <div>
                <Link href={`/rooms/${userInfo?.room?._id}`}>
                  <button className="button my-3 mx-2">View Room</button>
                </Link>
                <button
                  className="button my-3 mx-2 border-red-500 text-red-500 hover:bg-red-500"
                  onClick={() => cancelRoom()}
                >
                  Cancel Room
                </button>
              </div>
            </>
          )}{" "}
          {!userInfo?.room?._id && (
            <div className="h-full flex justify-center items-center">
              <h1 className="text-2xl">NO ROOM SELECTED!</h1>
            </div>
          )}
          {!userInfo?.room?._id && (
            <Link href={"/rooms"}>
              <button className="button my-3">View Rooms</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
