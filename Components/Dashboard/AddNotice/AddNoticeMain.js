import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";
import authCheck from "../../Firebase/authCheck";
import swal from "sweetalert";

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
    fetch("https://universal-hostel-api.onrender.com/notice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Notice has been submitted!", {
            icon: "success",
          });
        }
      })
      .then(() => reset());
  };
  const [notices, setNotices] = useState();
  const [notice, setNotice] = useState();
  useEffect(() => {
    fetch("https://universal-hostel-api.onrender.com/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
        setNotice(data[0]);
      });
  }, []);
  const noticeList = notice?.notice?.split("\n");
  const date = new Date(notice?.date);

  const deleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://universal-hostel-api.onrender.com/delete-notice/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              console.log(data);
              swal("Notice delete successful!", {
                icon: "success",
              });

              const remainingRoom = notices?.filter((room) => room._id !== id);
              setNotices(remainingRoom);
              setNotice(remainingRoom[0]);
            }
          })
          .then((data) => console.log(data));
      }
    });
  };

  return (
    <div>
      <div className=" font-sansita">
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
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8  md:col-span-2">
          <h1 className="text-3xl mb-8 font-bold underline">{notice?.title}</h1>
          {noticeList?.map((element, i) => {
            return (
              <h1 className="text-lg" key={i}>
                {element}
              </h1>
            );
          })}
          <div className="flex justify-between">
            <div>
              <h1 className="mt-10 text-sm">{date?.toDateString()}</h1>
              <h1 className=" text-sm">{notice?.time}</h1>
            </div>
            <button
              className="button-danger mt-10 px-4"
              onClick={() => {
                deleteItem(notice?._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8 ">
          <h1 className="text-2xl font-bold mb-4 underline">Notices</h1>
          {notices?.map((note) => {
            const noteDate = new Date(note?.date);
            return (
              <div
                onClick={() => setNotice(note)}
                className={`${
                  note?._id === notice?._id
                    ? "p-2 bg-[#36393e82] shadow-lg rounded-lg mb-2 border border-orange-400 cursor-pointer"
                    : "p-2 bg-[#36393e82] shadow-lg rounded-lg mb-2 border border-[#36393e82] cursor-pointer"
                }`}
                // className="  p-2 bg-[#36393e82] shadow-lg rounded-lg mb-1"
                key={note?._id}
              >
                <div className="w-full grid grid-cols-3 gap-4">
                  <h1 className="col-span-2">{note?.title}</h1>
                  <h1 className="col-span-1 text-sm text-right">
                    {noteDate?.toDateString()} <br />
                    {note?.time}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default authCheck(adminCheck(AddNoticeMain));
