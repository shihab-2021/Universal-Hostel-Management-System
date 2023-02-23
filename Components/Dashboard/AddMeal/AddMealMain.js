/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";

const AddMealMain = () => {
  const router = useRouter();

  const [time, setTime] = useState("");

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // Save User Information
  const submitHandler = (info) => {
    const roomInfo = {
      ...info,
      time: time,
      bookedBy: [],
    };
    if (
      !roomInfo?.time ||
      !roomInfo?.about ||
      !roomInfo?.cost
    ) {
      alert(
        "Your have to fill all field. Please enter the date if anyone is missing. Thank you."
      );
      return;
    }
    fetch("https://universal-hostel-api.onrender.com/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Meal has been submitted.");
          router.replace("/meal");
        }
      });
  };
  return (
    <div>
      <div className="container mx-auto px-3">
        <form
          onSubmit={handleSubmit(submitHandler)}
          style={{
            // boxShadow: "0 0 2rem 0 rgb(136 152 170 / 15%)",
            backgroundColor: "#36393e52",
          }}
          className="my-5 rounded shadow-xl bg-slate-200 dark:bg-darkBlue p-6 text-Dark dark:text-white"
        >
          <div className="grid grid-cols-12 gap-3 py-2">
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="time">Time</label>
              <select
                value={time}
                onChange={handleTime}
                //   {...register("branch")}
                className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg dark:border-0"
              >
                <option className="hidden">Select Time</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="cost">Cost</label>
              <input
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="number"
                placeholder="Cost"
                {...register("cost")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label htmlFor="about">About</label>
              <textarea
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                rows={5}
                placeholder="About"
                {...register("about")}
                //   defaultValue={data?.profession}
              />
            </div>
          </div>
          <span className="">
            <input
              type="submit"
              className=" mt-5 rounded-lg cursor-pointer bg-indigo-500 px-6 py-3 text-lg font-semibold text-white"
              value="Add Room"
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default adminCheck(AddMealMain);
