import React, { useEffect } from "react";
import Layout from "../../Components/Dashboard/Layout";
import authCheck from "../../Components/Firebase/authCheck";
import MainPayment from "../../Components/Payment/MainPayment";
import swal from "sweetalert";

const Payment = () => {
  const openAlert = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Layout>
      <div>
        <div className="text-center text-5xl">
          <h1>Payment</h1>
          <button onClick={() => openAlert()}>open</button>
        </div>
        {/* <MainPayment></MainPayment> */}
      </div>
    </Layout>
  );
};

export default authCheck(Payment);
