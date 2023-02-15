import { IoMdCheckmarkCircle } from "react-icons/io";

const RoomFacilities = ({ feature }) => {
  console.log(feature);
  return (
    <div className="flex items-center my-1">
      <IoMdCheckmarkCircle className="text-lg text-yellow-500 font-bold" />
      <h1 className="px-2">{feature}</h1>
    </div>
  );
};

export default RoomFacilities;
