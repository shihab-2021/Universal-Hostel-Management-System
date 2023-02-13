import { useState } from "react";
import Room from "../../Components/room.js";
import { roomData } from "../../data/room-data.js";

export default function Rooms() {
  const [branchValue, setBranchValue] = useState();
  const [selectedRoom, setSelectedRoom] = useState();

  if (selectedRoom) {
    const { roomId } = selectedRoom;
  }

  return (
    <div className="flex items-center flex-col">
      <div className="roomSubmit my-4 mb-8">
        <label htmlFor="branch">Choose a branch: </label>
        <select
          id="branch"
          name="branch"
          value={branchValue}
          onChange={(e) => {
            setBranchValue(e.target.value);
          }}
        >
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
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
                  <h1 className="text-center text-3xl">
                    Rooms and Seats in {branchValue}
                  </h1>
                  <div className="flex w-full">
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
