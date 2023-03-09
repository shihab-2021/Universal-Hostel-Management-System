import React, { useEffect, useState } from "react";
import Layout from "../../Components/Dashboard/Layout";
import authCheck from "../../Components/Firebase/authCheck";
import MainPayment from "../../Components/Payment/MainPayment";
import swal from "sweetalert";
<<<<<<< HEAD
import Loading from "../../Components/Loading/Loading";
import useAuth from "../../Components/Firebase/useAuth";
import { useRouter } from "next/router";
import DashboardPayment from "../../Components/Dashboard/Payment/DashboardPayment";

const Payment = () => {
  const { user, userInfo } = useAuth();
  const router = useRouter();
  const id = router.query.paymentId;
  const [isLoading, setIsLoading] = useState(false);
  const [payInfo, setPayInfo] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/payments/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayInfo(data);
        setIsLoading(false);
        console.log(data);
      });
  }, [userInfo, id]);

  return (
    <Layout>
      <div>
        <div className="relative h-40 bg-fixed bg-[url('https://i.ibb.co/mF5GQj9/image.png')] bg-no-repeat bg-cover bg-center ">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            Payment
          </h1>
        </div>
        {isLoading && <Loading></Loading>}
        {!isLoading && <DashboardPayment payInfo={payInfo}></DashboardPayment>}
=======
import useAuth from "../../Components/Firebase/useAuth";

const Payment = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-center text-5xl">Payment</h1>
        <div></div>
        {/* <MainPayment></MainPayment> */}
>>>>>>> e99a3238db79ddf2c40b6f618fe3db07bfbc1a41
      </div>
    </Layout>
  );
};

export default authCheck(Payment);
