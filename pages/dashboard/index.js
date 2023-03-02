/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import MainAdminDashboardHome from "../../Components/Dashboard/AdminDashboardHome/MainAdminDashboardHome";
import DashboardItem from "../../Components/Dashboard/Profile/DashboardItem";
import Layout from "../../Components/Dashboard/Layout";
import useAuth from "../../Components/Firebase/useAuth";
import authCheck from "../../Components/Firebase/authCheck";
import UserInformation from "../../Components/UserInformation";

const Dashboard = () => {
  const { user, userInfo } = useAuth();
  return (
    <div>
      <Layout>
        {userInfo?.role === "user" && <UserInformation />}
        {userInfo?.role === "admin" && (
          <MainAdminDashboardHome></MainAdminDashboardHome>
        )}
      </Layout>
    </div>
  );
};

export default authCheck(Dashboard);
