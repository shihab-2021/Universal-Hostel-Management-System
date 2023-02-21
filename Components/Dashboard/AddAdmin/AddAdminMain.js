import React, { useState } from "react";

const AddAdminMain = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://universal-hostel-api.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
        //   setSuccess(true);
          alert("Made Admin successfully!");
        } else {
          alert("Please enter a valid email!");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="h-[80vh]">
      <div className="pt-5">
        <h2 className=" text-2xl">MAKE AN ADMIN</h2>
        <form
          className="my-5"
          onSubmit={handleAdminSubmit}
          style={{ maxWidth: "25rem" }}
        >
          <input
            required
            placeholder="Enter email to make admin"
            className="text-xl bg-auto p-2 border-slate-500 border rounded-lg w-full"
            type="email"
            onBlur={handleOnBlur}
          />
          <br />
          <br />
          <button
            className=" border py-2 px-3 rounded-lg border-teal-500 text-xl text-teal-500"
            type="submit"
          >
            Make Admin
          </button>
          <br />
          <br />
          {/* {success && alert("Made Admin successfully!")} */}
        </form>
      </div>
    </div>
  );
};

export default AddAdminMain;
