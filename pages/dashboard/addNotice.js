import { useEffect } from "react";
import Layout from "../../Components/Dashboard/Layout";

const addNotice = () => {
  useEffect(() => {
    fetch("https://universal-hostel-api.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Layout>
        <div className="card-design">
          <h1>Send Notification</h1>
          <div>{}</div>
        </div>
      </Layout>
    </div>
  );
};

export default addNotice;
