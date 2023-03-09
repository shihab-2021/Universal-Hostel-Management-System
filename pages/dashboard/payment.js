import React, { useEffect } from "react";
import Layout from "../../Components/Dashboard/Layout";
import authCheck from "../../Components/Firebase/authCheck";
import MainPayment from "../../Components/Payment/MainPayment";
import swal from "sweetalert";
import useAuth from "../../Components/Firebase/useAuth";

const Payment = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-center text-5xl">Payment</h1>
        <div></div>
        {/* <MainPayment></MainPayment> */}
      </div>
    </Layout>
  );
};

export default authCheck(Payment);
