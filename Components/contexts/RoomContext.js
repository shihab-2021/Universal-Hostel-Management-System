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

  return (
    <RoomContext.Provider value={{ roomData }}>{children}</RoomContext.Provider>
  );
};

export default RoomContext;
