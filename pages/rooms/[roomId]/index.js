/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import RoomFacilities from "../../../Components/Rooms/RoomFacilities";
import MainLayout from "../../../Components/MainLayout/MainLayout";
import { useContext, useEffect } from "react";
import RoomContext, {
  RoomProvider,
} from "../../../Components/contexts/RoomContext";

export default function RoomDetails() {
  const router = useRouter();
  const id = router.query.roomId;

  const { roomData } = useContext(RoomContext);

  useEffect(() => {
    fetch(`https://universal-hostel-api.onrender.com/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [id]);

  return (
    <MainLayout>
      <div className="w-screen pb-10">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/p3qb5xF/back12.jpg')] bg-no-repeat bg-cover bg-bottom mb-20">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Room Details
          </h1>
        </div>
        {roomData?.map((room) => {
          if (id == room._id) {
            return (
              <div key={room._id} className="w-full">
                <div className="w-full lg:w-3/4 mx-auto flex px-5 flex-col md:flex-row">
                  <div className="w-full md:w-1/2 px-5 mb-12">
                    <img
                      src={room.image}
                      className="w-full pt-2 max-h-[600px] object-contain "
                      alt="roomImage"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-5 ">
                    <div className="flex mb-5">
                      <h1 className="text-2xl font-bold w-[60%]">
                        {room.category == "Business" ? "Private" : "Shared"}{" "}
                        Room
                      </h1>
                      <div className="flex items-center">
                        <h1 className="text-sm text-gray-400 leading-3 pr-2">
                          Per <br /> week
                        </h1>
                        <h1 className="text-3xl tracking-tighter text-orange-500">
                          Tk {room.cost}
                        </h1>
                      </div>
                    </div>
                    <p className="text-gray-400 py-5 ">{room.about}</p>
                    <h1>Room no: {room.roomNo} </h1>
                    <h1>Branch: {room.branch} </h1>
                    <h1>Attached bathroom: {room.attachedBathroom}</h1>
                    <h1>Attached balcony: {room.attachedBalcony}</h1>
                    <h1>Room category: {room.category}</h1>
                    <h1>Floor: {room.floor}</h1>

                    <div className="my-5">
                      <h1 className="text-lg font-bold ">ROOM FACILITIES:</h1>
                      <div className="text-gray-400 ">
                        {room.category == "Business" ? (
                          <RoomFacilities feature={"Built in smart TV"} />
                        ) : (
                          ""
                        )}
                        {room.category == "Business" ? (
                          <RoomFacilities feature={"Air conditioner"} />
                        ) : (
                          ""
                        )}

                        <RoomFacilities feature={"Elevator access"} />
                        <RoomFacilities feature={"Fingerprint unlock"} />
                        <RoomFacilities feature={"Plug sockets"} />
                        <RoomFacilities feature={"Free WiFi"} />
                        <RoomFacilities feature={"Generator backup"} />
                        <RoomFacilities feature={"Cleaning service"} />
                        <RoomFacilities feature={"Meal facility"} />
                      </div>
                      <h1></h1>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-10">
                  <button className="bg-yellow-400 border-2 border-transparent hover:border-yellow-400 hover:text-yellow-400 hover:bg-color1 w-fit p-3 rounded text-color1 font-bold ">
                    Select Room
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </MainLayout>
  );
}
