import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import ManageRoomsMain from "../../Components/Dashboard/ManageRoom/ManageRoomsMain";
import adminCheck from "../../Components/Firebase/adminCheck";
import authCheck from "../../Components/Firebase/authCheck";

const ManageRoom = () => {
  return (
    <>
      <Layout>
        <ManageRoomsMain></ManageRoomsMain>
      </Layout>
    </>
  );
};

export default authCheck(adminCheck(ManageRoom));
