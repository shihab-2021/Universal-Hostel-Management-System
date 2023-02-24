import React, { useEffect, useState } from "react";
import ManageUserElement from "./ManageUserElement";
import Loading from "../../Loading/Loading";

const ManageUserMain = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data);
      });
  }, []);
  return (
    <div className="md:p-10 p-2 card-design">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-2xl mb-3">Manage Users</h1>
      </div>
      <div className="mx-auto overflow-x-auto w-full">
        <table class="table-auto text-left border-collapse mx-auto card-design w-full min-h-[100px]">
          <thead className="">
            <tr className="border-b-2 py-3">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className="">
            {loading ? (
              <Loading />
            ) : (
              users.map((user) => {
                return user.role == "user" ? (
                  <ManageUserElement data={user} key={user._id} />
                ) : (
                  ""
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserMain;
