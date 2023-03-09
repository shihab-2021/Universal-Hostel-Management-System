import React, { useEffect, useState } from "react";
import Layout from "../../Components/Dashboard/Layout";
import authCheck from "../../Components/Firebase/authCheck";
import MainPayment from "../../Components/Payment/MainPayment";
import swal from "sweetalert";
import useAuth from "../../Components/Firebase/useAuth";
import { useRouter } from "next/router";
import DashboardPayment from "../../Components/Dashboard/Payment/DashboardPayment";
import Loading from "../../Components/Shared/Loading/Loading";

const Payment = () => {
  const { user, userInfo } = useAuth();
  const router = useRouter();
  const id = router.query.paymentId;
  const [isLoading, setIsLoading] = useState(false);
  const [payInfo, setPayInfo] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://universal-hostel-api.onrender.com/payments/${userInfo?._id}`)
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
        {!isLoading && !payInfo && (
          <div>
            <h1 className="text-center py-10 my-10 text-4xl">
              You have to book a room first to be able to pay dues or rent!
            </h1>
          </div>
        )}
        {!isLoading && payInfo && (
          <DashboardPayment payInfo={payInfo}></DashboardPayment>
        )}
      </div>
    </Layout>
  );
};

export default authCheck(Payment);
