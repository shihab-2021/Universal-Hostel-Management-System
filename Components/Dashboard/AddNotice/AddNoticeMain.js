import React from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";
import authCheck from "../../Firebase/authCheck";

const AddNoticeMain = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (info) => {
    let time = new Date();
    const date = new Date().toLocaleDateString();
    const currentTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const roomInfo = {
      ...info,
      date: date,
      time: currentTime,
    };
    fetch("http://localhost:5000/notice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Notice has been submitted.");
          // router.replace("/meal");
        }
      })
      .then(() => reset());
  };
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
              <label htmlFor="cost">Title</label>
              <input
                required
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                placeholder="Title"
                {...register("title")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label htmlFor="about">Write Notice</label>
              <textarea
                required
                name="postContent"
                className="rounded-md border-2 p-2 text-lg"
                type="text"
                rows={8}
                placeholder="Notice"
                {...register("notice")}
                //   defaultValue={data?.profession}
              />
            </div>
          </div>
          <span className="">
            <input
              type="submit"
              className=" mt-5 rounded-lg cursor-pointer bg-indigo-500 px-6 py-3 text-lg font-semibold text-white"
              value="Add Notice"
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default authCheck(adminCheck(AddNoticeMain));
