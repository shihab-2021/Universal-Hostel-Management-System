/* eslint-disable @next/next/no-img-element */
import { roomData } from "../../../data/room-data";
import { useRouter } from "next/router";

export default function RoomDetails() {
  const router = useRouter();
  const id = router.query.roomId;

  return (
    <div>
      {roomData.map((i) => {
        console.log(i);
        return (
          <div key={i.branchId}>
            <div className="flex w-full">
              {i.rooms.map((room) => {
                if (room.roomId === id) {
                  return (
                    <div
                      key={room.roomId}
                      className="w-3/4 m-auto my-3 text-center"
                    >
                      <h1>Room no: {room.roomNo} </h1>
                      <h1>Branch: {i.branch} </h1>
                      <h1>Attached bathroom: {room.bathroom}</h1>
                      <h1>Attached balcony: {room.balcony}</h1>
                      <h1>Floor: {room.floor}</h1>
                      <h1>Rent per week: {room.rent} Tk</h1>
                      <br />
                      <h1>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ratione aliquid dicta voluptates dolorum assumenda
                        amet, obcaecati deserunt? Sequi molestias voluptates,
                        consequatur libero facere aspernatur est ad quia
                        expedita iusto a accusamus earum doloremque quas ipsa
                        ratione consectetur laudantium unde! Molestias sint,
                        error nobis odio incidunt debitis maxime quaerat
                        consequuntur ex!
                      </h1>
                      <img
                        src={room.roomImage}
                        className="max-w-sm m-auto my-4"
                        alt="roomImage"
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
