import { createContext, useEffect, useState } from "react";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [roomData, setRoomData] = useState();

  useEffect(() => {
    const getRooms = async () => {
      const res = await fetch(
        "https://universal-hostel-api.onrender.com/rooms"
      );
      const data = await res.json();

      setRoomData(data);
    };

    getRooms();
  }, []);
  const deleteItem = (id) => {
    const agree = window.confirm("Are you sure you want to delete this room?");

    if (agree) {
      fetch(`https://universal-hostel-api.onrender.com/delete-room/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => alert("Room delete successful!"))
        .then((data) => console.log(data));

      const remainingRoom = roomData.filter((room) => room._id !== id);
      setRoomData(remainingRoom);

    }
  };

  return (
    <RoomContext.Provider value={{ roomData, deleteItem }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContext;
