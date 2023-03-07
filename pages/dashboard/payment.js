import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import authCheck from "../../Components/Firebase/authCheck";
import MainPayment from "../../Components/Payment/MainPayment";

const Payment = () => {
  return (
    <Layout>
      <div>
        <div className="text-center text-5xl">
          <h1>Payment</h1>
        </div>
        {/* <MainPayment></MainPayment> */}
      </div>
    </Layout>
  );
};

export default authCheck(Payment);
