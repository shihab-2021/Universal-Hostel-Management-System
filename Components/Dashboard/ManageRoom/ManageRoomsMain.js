import React, { useContext, useState } from "react";
import RoomContext from "../../contexts/RoomContext";
import RoomInfo from "./RoomInfo";

const ManageRoomsMain = () => {
  const [branchValue, setBranchValue] = useState("Mirpur 2");
  const { roomData, deleteItem } = useContext(RoomContext);
  return (
    <div>
        <div><h1 className="text-center text-5xl pb-5">Rooms</h1></div>
      <div className="flex items-center flex-col pb-10">
        <div className="roomSubmit mb-8">
          <label className="text-xl" htmlFor="branch">Choose a branch: </label>
          <select className="px-2 py-1 rounded border"
            id="branch"
            name="branch"
            value={branchValue}
            onChange={(e) => {
              setBranchValue(e.target.value);
            }}
          >
            <option value="Mirpur 2">Mirpur 2</option>
            <option value="Dhanmondi">Dhanmondi</option>
          </select>
        </div>
        <div className="roomContent container mx-auto px-3">
          <div className="rooms">
            <h1 className="text-center text-3xl mb-5">
              Rooms and Seats in {branchValue}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
              {roomData?.map((room) => {
                if (room.branch === branchValue) {
                  return <RoomInfo key={room._id} data={{ room }} deleteItem={deleteItem} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRoomsMain;
