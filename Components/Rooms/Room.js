/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Room(props) {
  const room = props.data.room;
  return (
    <div className=" card" id={room._id}>
      <img
        src={room.image}
        className="object-cover m-5 aspect-[4/3]"
        alt="roomImage"
      />
      <h1>Attached bathroom: {room.attachedBathroom}</h1>
      <h1>Attached balcony: {room.attachedBalcony}</h1>
      <h1>Floor: {room.floor}</h1>
      <h1>Rent per week: {room.cost} Tk</h1>

      <div>
        <Link href={`/rooms/${room._id}`}>
          <button className="button mt-4 m-1">View Details</button>
        </Link>
      </div>
    </div>
  );
}
