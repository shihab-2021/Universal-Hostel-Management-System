import React, { useEffect, useState } from "react";
import MainProfile from "../../../Components/Dashboard/Profile/MainProfile";
import authCheck from "../../../Components/Firebase/authCheck";
import useAuth from "../../../Components/Firebase/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://universal-hostel-server.vercel.app/users-data/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, [data, user?.email]);
  return <div>{data && <MainProfile data={data}></MainProfile>}</div>;
};

export default authCheck(Profile);
