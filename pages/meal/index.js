import { useEffect, useState } from "react";
import MainLayout from "../../Components/MainLayout/MainLayout";
import Meal from "../../Components/Meal/Meal";
import useAuth from "../../Components/Firebase/useAuth";
import Layout from "../../Components/Dashboard/Layout";

export default function Meals() {
  const [breakfast, setBreakfast] = useState({ price: "0" });
  const [lunch, setLunch] = useState({ price: "0" });
  const [dinner, setDinner] = useState({ price: "0" });
  const [mealData, setMealData] = useState([]);
  const { userInfo, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/meals")
      .then((res) => res.json())
      .then((data) => setMealData(data));

    mealData.map((meal) => {
      // console.log(meal);
      if (meal.time === "Breakfast") {
        if (meal.bookedBy.some((element) => element.uid === userInfo?._id)) {
          setBreakfast({
            id: meal._id,
            price: meal.cost,
            itemPack: meal.time,
          });
        }
      }

      if (meal.time === "Lunch") {
        if (meal.bookedBy.some((element) => element.uid === userInfo?._id)) {
          setLunch({
            id: meal._id,
            price: meal.cost,
            itemPack: meal.time,
          });
        }
      }

      if (meal.time === "Dinner") {
        if (meal.bookedBy.some((element) => element.uid === userInfo?._id)) {
          setDinner({
            id: meal._id,
            price: meal.cost,
            itemPack: meal.time,
          });
        }
      }
    });

    const today = new Date();
    const todayDate = today.toDateString();
    const tomorrow = new Date(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`
    );
    const tomorrowDate = tomorrow.toDateString();
    console.log(todayDate < tomorrowDate);
  }, [userInfo]);

  const handleClick = (id, type, itemPack, price) => {
    if (type === "Breakfast") {
      setBreakfast({ id, price, itemPack });
    }
    if (type === "Lunch") {
      setLunch({ id, price, itemPack });
    }
    if (type === "Dinner") {
      setDinner({ id, price, itemPack });
    }
  };

  const clearMealPlan = () => {
    setBreakfast({ price: "0" });
    setLunch({ price: "0" });
    setDinner({ price: "0" });
  };

  const confimrMealPlan = () => {
    if (userInfo) {
      setIsLoading(true);
      fetch("http://localhost:5000/meals", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          breakfast,
          lunch,
          dinner,
          currentUser: userInfo._id,
        }),
      })
        .then((res) => res.json())
        .then(() => setIsLoading(false));
    } else {
      window.alert("User not found. Please refresh the page and try again.");
    }
  };

  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;

  return (
    <Layout>
      <div className="pb-10">
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/F0WC8Rv/image.png')] bg-no-repeat bg-cover bg-center ">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Meal Plan
          </h1>
        </div>
        {/* {userInfo && <h1>User found</h1>} */}
        <div className="text-center w-2/3 md:w-1/2 max-w-lg mx-auto my-10">
          <h1 className="text-2xl">Current Plan</h1>
          <div className="flex justify-between items-center my-3">
            <div>
              <h1 className="text-2xl text-indigo-300 font-bold">Breakfast:</h1>
            </div>

            {JSON.stringify(breakfast) !== JSON.stringify({}) ? (
              <div>
                <h1 className="text-xs text-gray-400 leading-3">
                  Package {breakfast.itemPack}
                </h1>
                <h1 className="text-xl text-gray-400">
                  Tk {breakfast.price} / day
                </h1>
              </div>
            ) : (
              <h1 className="text-lg text-red-400">Not selected!</h1>
            )}
          </div>

          <div className="flex justify-between items-center my-3">
            <div>
              <h1 className="text-2xl text-indigo-300 font-bold">Lunch:</h1>
            </div>

            {JSON.stringify(lunch) !== JSON.stringify({}) ? (
              <div>
                <h1 className="text-xs text-gray-400 leading-3">
                  Package {lunch.itemPack}
                </h1>
                <h1 className="text-xl text-gray-400">
                  Tk {lunch.price} / day
                </h1>
              </div>
            ) : (
              <h1 className="text-lg text-red-400">Not selected!</h1>
            )}
          </div>

          <div className="flex justify-between items-center my-3">
            <div>
              <h1 className="text-2xl text-indigo-300 font-bold">Dinner:</h1>
            </div>

            {JSON.stringify(dinner) !== JSON.stringify({}) ? (
              <div>
                <h1 className="text-xs text-gray-400 leading-3">
                  Package {dinner.itemPack}
                </h1>
                <h1 className="text-xl text-gray-400">
                  Tk {dinner.price} / day
                </h1>
              </div>
            ) : (
              <h1 className="text-lg text-red-400">Not selected!</h1>
            )}
          </div>
          <div className="flex border-t-2 justify-between text-2xl font-bold">
            <h1>Total:</h1>
            <h1>
              Tk{" "}
              {parseInt(breakfast?.price) +
                parseInt(lunch?.price) +
                parseInt(dinner?.price)}{" "}
              / day
            </h1>
          </div>
          <div className="my-5">
            <button onClick={clearMealPlan} className="button m-2">
              Clear
            </button>
            <button onClick={confimrMealPlan} className="button m-2">
              Confirm
            </button>
          </div>
        </div>
        {isLoading && <h1>IS LOADING</h1>}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            BREAKFAST
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Breakfast") {
                idx1++;
                return (
                  <div key={meal._id}>
                    <Meal
                      items={meal.about}
                      price={meal.cost}
                      itemPack={idx1}
                      handleClick={handleClick}
                      id={meal._id}
                      type={meal.time}
                    />
                  </div>
                );
              }
            })}
          </div>

          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            LUNCH
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {mealData?.map((meal) => {
              if (meal.time == "Lunch") {
                idx2++;
                return (
                  <div key={meal._id}>
                    <Meal
                      items={meal.about}
                      price={meal.cost}
                      itemPack={idx2}
                      handleClick={handleClick}
                      id={meal._id}
                      type={meal.time}
                    />
                  </div>
                );
              }
            })}
          </div>

          <h1 className="text-4xl font-bold text-indigo-500 mb-8 mt-20">
            DINNER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {mealData?.map((meal, i) => {
              if (meal.time == "Dinner") {
                idx3++;
                return (
                  <div key={meal._id}>
                    <Meal
                      items={meal.about}
                      price={meal.cost}
                      itemPack={idx3}
                      handleClick={handleClick}
                      id={meal._id}
                      type={meal.time}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
