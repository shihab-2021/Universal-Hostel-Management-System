import { useEffect } from "react";
import AddNoticeMain from "../../Components/Dashboard/AddNotice/AddNoticeMain";
import Layout from "../../Components/Dashboard/Layout";

const AddNotice = () => {
  return (
    <div>
      <Layout>
        <AddNoticeMain></AddNoticeMain>
      </Layout>
    </div>
  );
};

export default AddNotice;
