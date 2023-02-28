/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";

const AddMealMain = () => {
  const router = useRouter();

  const [time, setTime] = useState("");
  const [mealData, setMealData] = useState([]);

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
    if (!roomInfo?.time || !roomInfo?.about || !roomInfo?.cost) {
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

  useEffect(() => {
    fetch("https://universal-hostel-api.onrender.com/meals")
      .then((res) => res.json())
      .then((data) => setMealData(data));
  }, []);

  const deleteItem = (id) => {
    const agree = window.confirm("Are you sure you want to delete this meal?");

    if (agree) {
      console.log(id);
      fetch(`https://universal-hostel-api.onrender.com/delete-meal/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => alert("Meal delete successful!"))
        .then((data) => console.log(data));

      const remainingMeal = mealData.filter((meal) => meal._id !== id);
      setMealData(remainingMeal);
    }
  };

  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  return (
    <div>
      <div className="container mx-auto px-3 font-sansita">
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
              value="Add Meal"
            />
          </span>
        </form>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            BREAKFAST
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Breakfast") {
                const itemList = meal?.about?.split("\n");
                idx1++;
                return (
                  <div key={meal._id}>
                    <div className="card w-[300px] flex flex-col justify-between h-full">
                      <div>
                        <h1 className="pb-2 text-lg border-b-2 font-bold">
                          Package {idx1}
                        </h1>
                        <div className="py-3 ">
                          {itemList?.map((element, i) => {
                            return <h1 key={i}>{element}</h1>;
                          })}
                        </div>
                        <h1 className="pt-2 border-t-2 text-indigo-300">
                          Tk {meal?.cost} / day
                        </h1>
                      </div>
                      <button
                        onClick={() => deleteItem(meal._id)}
                        className="button mt-3 px-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            LUNCH
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Lunch") {
                const itemList = meal?.about?.split("\n");
                idx2++;
                return (
                  <div key={meal._id}>
                    <div className="card w-[300px] flex flex-col justify-between h-full">
                      <div>
                        <h1 className="pb-2 text-lg border-b-2 font-bold">
                          Package {idx2}
                        </h1>
                        <div className="py-3 ">
                          {itemList?.map((element, i) => {
                            return <h1 key={i}>{element}</h1>;
                          })}
                        </div>
                        <h1 className="pt-2 border-t-2 text-indigo-300">
                          Tk {meal?.cost} / day
                        </h1>
                      </div>
                      <button
                        onClick={() => deleteItem(meal._id)}
                        className="button mt-3 px-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            DINNER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Dinner") {
                const itemList = meal?.about?.split("\n");
                idx3++;
                return (
                  <div key={meal._id}>
                    <div className="card w-[300px] flex flex-col justify-between h-full">
                      <div>
                        <h1 className="pb-2 text-lg border-b-2 font-bold">
                          Package {idx3}
                        </h1>
                        <div className="py-3 ">
                          {itemList?.map((element, i) => {
                            return <h1 key={i}>{element}</h1>;
                          })}
                        </div>
                        <h1 className="pt-2 border-t-2 text-indigo-300">
                          Tk {meal?.cost} / day
                        </h1>
                      </div>
                      <button
                        onClick={() => deleteItem(meal._id)}
                        className="button mt-3 px-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminCheck(AddMealMain);
