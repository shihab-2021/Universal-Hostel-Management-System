/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RoomInfo(props) {
  const room = props.data.room;

  return (
    <div
      style={{
        backgroundColor: "#36393e52",
      }}
      className="shadow-xl rounded-lg overflow-hidden"
    >
      <div
        className="bg-cover bg-center h-64 p-4"
        style={{
          backgroundImage: `url(${room?.image})`,
        }}
      ></div>
      <div className="py-10 px-10 text-white h-64 flex justify-center flex-col text-center">
        <p className="uppercase tracking-wide text-xl font-bold ">
          {room?.title}
        </p>
        <p className="text-xs uppercase font-bold text-gray-200 pb-3">
          per month{" "}
          <span className="text-xl text-orange-500 mx-2">{room?.cost}৳</span>
        </p>
        <p className="py-3">{room?.branch}</p>
        <div className="">
          <p>{room?.category === "Economic" ? "Available Seats" : ""}</p>
          {room?.category === "Economic" ? (
            <p className="text-xl">{room.seat}/4</p>
          ) : (
            ""
          )}
        </div>

        <div className="text-center">
          <button
            className="button-danger mt-4 m-1"
            onClick={() => {
              props.deleteItem(room._id);
            }}
          >
            Delete
          </button>

          <Link href={`/rooms/${room._id}`}>
            <button className="button mt-4 m-1">Room Details</button>
          </Link>
          <Link href={`/dashboard/occupants/${room._id}`}>
            <button className="button mt-4 m-1">Occupants</button>
          </Link>
        </div>
      </div>
    </div>
    // <div className=" card" id={room._id}>
    //   <img
    //     src={room.image}
    //     className="object-cover m-5 aspect-[4/3]"
    //     alt="roomImage"
    //   />
    //   <h1>Attached bathroom: {room.attachedBathroom}</h1>
    //   <h1>Attached balcony: {room.attachedBalcony}</h1>
    //   <h1>Floor: {room.floor}</h1>
    //   <h1>Rent per week: {room.cost} ৳</h1>

    //   <div>
    //     <button
    //       className="button mt-4 m-1"
    //       onClick={() => {
    //         props.data.setSelectedRoom(room);
    //       }}
    //     >
    //       Select room
    //     </button>

    //     <Link href={`/rooms/${room._id}`}>
    //       <button className="button mt-4 m-1">View Details</button>
    //     </Link>
    //   </div>
    // </div>
  );
}
