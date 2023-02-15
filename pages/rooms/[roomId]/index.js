/* eslint-disable @next/next/no-img-element */
import RoomFacilities from "../../../Components/Rooms/roomFacilities";
import { roomData } from "../../../data/room-data";
import { useRouter } from "next/router";

export default function RoomDetails() {
  const router = useRouter();
  const id = router.query.roomId;

  return (
    <div className="py-10 w-screen">
      <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/p3qb5xF/back12.jpg')] bg-no-repeat bg-cover bg-bottom mb-20">
        <div className="bg-gray-800 h-full w-full opacity-80 "></div>
        <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
          Room Details
        </h1>
      </div>
      {roomData.map((i) => {
        return (
          <div key={i.branchId}>
            {i.rooms.map((room) => {
              if (room.roomId === id) {
                return (
                  <div className="w-full">
                    <div
                      key={room.roomId}
                      className="w-full lg:w-3/4 mx-auto flex px-5 flex-col md:flex-row"
                    >
                      <div className="w-full md:w-1/2 px-5 mb-12">
                        <img
                          src={room.roomImage}
                          className="w-full pt-2 max-h-[600px] object-contain "
                          alt="roomImage"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-5 ">
                        <div className="flex mb-5">
                          <h1 className="text-2xl font-bold w-[60%]">
                            {room.roomType} Room
                          </h1>
                          <div className="flex items-center">
                            <h1 className="text-sm text-gray-400 leading-3 pr-2">
                              Per <br /> week
                            </h1>
                            <h1 className="text-3xl tracking-tighter text-orange-500">
                              Tk {room.rent}
                            </h1>
                          </div>
                        </div>
                        <p className="text-gray-400 py-5 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rem, ut debitis vero impedit alias nulla
                          voluptatibus recusandae error veritatis, obcaecati
                          atque vitae iste hic sed perspiciatis, dolorum
                          tempore! Pariatur consequuntur quisquam adipisci at
                          vitae? Id sunt eius, quaerat ad asperiores corporis a
                          deserunt voluptatum. Incidunt maxime eaque odio porro
                          repudiandae.
                        </p>
                        <h1>Room no: {room.roomNo} </h1>
                        <h1>Branch: {i.branchName} </h1>
                        <h1>Attached bathroom: {room.bathroom}</h1>
                        <h1>Attached balcony: {room.balcony}</h1>
                        <h1>Room category: {room.roomClass}</h1>
                        <h1>Floor: {room.floor}</h1>

                        <div className="my-5">
                          <h1 className="text-lg font-bold ">
                            ROOM FACILITIES:
                          </h1>
                          <div className="text-gray-400 ">
                            {room.tv == true ? (
                              <RoomFacilities feature={"Built in smart TV"} />
                            ) : (
                              ""
                            )}
                            {room.ac == true ? (
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
        );
      })}
    </div>
  );
}
