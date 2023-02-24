import React from "react";
import AddAdminMain from "../../Components/Dashboard/AddAdmin/AddAdminMain";
import Layout from "../../Components/Dashboard/Layout";
import ManageAdmins from "../../Components/Dashboard/ManageAdmins/ManageAdmins";

const AddAdmin = () => {
  return (
    <>
      <Layout>
        <div className="card-design p-5">
          <ManageAdmins></ManageAdmins>
          <AddAdminMain></AddAdminMain>
        </div>
      </Layout>
    </>
  );
};

export default AddAdmin;
