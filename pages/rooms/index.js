import { useEffect, useState } from "react";
import { roomData } from "../../data/room-data.js";
import Room from "../../Components/Rooms/Room";
import authCheck from "../../Components/Firebase/authCheck.js";

const Rooms = () => {
  const [branchValue, setBranchValue] = useState("mirpur-2");
  const [selectedRoom, setSelectedRoom] = useState();

  if (selectedRoom) {
    const { roomId } = selectedRoom;
  }

  return (
    <div className="flex items-center flex-col pb-10">
      <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/p3qb5xF/back12.jpg')] bg-no-repeat bg-cover bg-bottom mb-10 w-screen">
        <div className="bg-gray-800 h-full w-full opacity-80 "></div>
        <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
          Rooms
        </h1>
      </div>
      <div className="roomSubmit mb-8">
        <label htmlFor="branch">Choose a branch: </label>
        <select
          id="branch"
          name="branch"
          value={branchValue}
          onChange={(e) => {
            setBranchValue(e.target.value);
          }}
        >
          <option value="mirpur-2">Mirpur 2</option>
          <option value="dhanmondi">Dhanmondi</option>
        </select>
      </div>
      <div className="roomContent">
        <div className="rooms">
          {roomData.map((branch) => {
            if (branch.branch === branchValue) {
              return (
                <div key={branch.branchId}>
                  <h1 className="text-center text-3xl mb-5">
                    Rooms and Seats in {branchValue}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                    {branch.rooms.map((room) => {
                      return (
                        <Room
                          key={room.roomId}
                          data={{ room, setSelectedRoom }}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default authCheck(Rooms);
