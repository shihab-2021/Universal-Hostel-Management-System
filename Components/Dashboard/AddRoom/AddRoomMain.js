/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import adminCheck from "../../Firebase/adminCheck";

const AddRoomMain = () => {
  // const { data } = props;
  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState();
  const [blogData, setBlogData] = useState([]);
  const router = useRouter();
  // const [startDate, setStartDate] = useState(data?.birthDate);

  const [branch, setBranch] = useState("");
  const [category, setCategory] = useState("");

  const handleBranch = (event) => {
    setBranch(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const imageFileDrop = async (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    setImageLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvszolotz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    const field = "thumbnail";
    const value = file.secure_url;
    const newBlogData = { ...blogData };
    newBlogData[field] = value;
    setBlogData(newBlogData);

    setImage(file.secure_url);
    // setImage(files[0])
    setImageLoading(false);
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    setImageLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvszolotz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const field = e.target.name;
    const value = file.secure_url;
    setImage(file.secure_url);
    setImageLoading(false);
  };

  // Save User Information
  const submitHandler = (info) => {
    const roomInfo = {
      ...info,
      image: image,
      branch: branch,
      category: category,
      status: "Available",
      bookedBy: [],
    };
    if (roomInfo.category === "Economic") roomInfo.seat = 4;
    console.log(roomInfo);
    if (
      !roomInfo?.title ||
      !roomInfo?.image ||
      !roomInfo?.category ||
      !roomInfo?.about ||
      !roomInfo?.branch ||
      !roomInfo?.attachedBathroom ||
      !roomInfo?.attachedBalcony ||
      !roomInfo?.cost ||
      !roomInfo?.floor
    ) {
      alert(
        "Your have to fill all field. Please enter the date if anyone is missing. Thank you."
      );
      return;
    }
    fetch("http://localhost:5000/rooms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Room has been submitted.");
          router.replace("/rooms");
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
          <div className="grid grid-cols-12 gap-3">
            {/* Profile Photo Update Handling  */}
            <div className="col-span-12 flex flex-col md:col-span-6">
              Upload Room Photo
              <div className="rounded-lg border-2 border-dotted border-gray-400 p-3 text-center">
                <div
                  // className="mt-12 text-center"
                  onDragOver={dragOver}
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDrop={imageFileDrop}
                >
                  <div className="">
                    {imageLoading && (
                      <div>
                        <img
                          className="mx-auto animate-ping"
                          style={{ height: "50px", width: "50px" }}
                          src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                          alt=""
                        />
                        <p className="text-xl text-gray-400">Loading ...</p>
                      </div>
                    )}
                    {!imageLoading && (
                      <div>
                        <img
                          className="mx-auto animate-pulse"
                          style={{ height: "50px", width: "50px" }}
                          src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                          alt=""
                        />
                        <p className="text-md text-gray-400">
                          Drag & Drop room photo
                        </p>
                      </div>
                    )}
                    <p className="py-4">
                      <span className="rounded-lg bg-gray-400 px-2 py-2 font-semibold">
                        Browse File
                      </span>
                    </p>
                  </div>
                </div>
                <input
                  className="hidden"
                  type="file"
                  name="thumbnail"
                  placeholder="upload"
                  onChange={uploadImage}
                />
              </div>
            </div>
            {/* Profile picture  */}
            <div className="col-span-12 flex justify-center md:col-span-6">
              <div className="mx-auto flex self-center overflow-hidden sm:mx-0">
                <img
                  className="mx-auto object-cover"
                  src={image}
                  // src="https://img.freepik.com/free-icon/important-person_318-10744.jpg?w=2000"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 py-2">
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="title">Title</label>
              <input
                // onBlur={blogTitle}
                //   defaultValue={data?.displayName}
                required
                placeholder="Title"
                className="h-14 w-full rounded-md border-2 p-3 text-lg"
                type="text"
                {...register("title")}
              />
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="roomNo">Room No</label>
              <input
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                placeholder="Room No"
                {...register("roomNo")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="branch">Branch</label>
              <select
                value={branch}
                onChange={handleBranch}
                //   {...register("branch")}
                className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg dark:border-0"
              >
                <option className="hidden">Select Branch</option>
                <option>Mirpur 2</option>
                <option>Dhanmondi</option>
                <option>Uttara</option>
                <option>Banani</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="branch">Room Category</label>
              <select
                value={category}
                onChange={handleCategory}
                //   {...register("category")}
                className=" h-14 w-full cursor-pointer rounded-lg border-2 p-3 text-lg dark:border-0"
              >
                <option className="hidden">Select Category</option>
                <option>Economic</option>
                <option>Business</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="attachedBathroom">Attached Bathroom</label>
              <input
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                placeholder="Attached Bathroom"
                {...register("attachedBathroom")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="attachedBalcony">Attached Balcony</label>
              <input
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                placeholder="Attached Balcony"
                {...register("attachedBalcony")}
                //   defaultValue={data?.profession}
              />
            </div>
            <div className="col-span-12 flex flex-col  md:col-span-6">
              <label htmlFor="floor">Floor</label>
              <input
                className="rounded-md h-14 border-2 p-2 text-lg"
                type="text"
                placeholder="Floor"
                {...register("floor")}
                //   defaultValue={data?.profession}
              />
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

export default adminCheck(AddRoomMain);
