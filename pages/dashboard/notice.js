import React from 'react';
import Layout from '../../Components/Dashboard/Layout';
import NoticeMain from '../../Components/Dashboard/Notice/NoticeMain';

const notice = () => {
    return (
        <div>
            <Layout>
                <NoticeMain></NoticeMain>
            </Layout>
        </div>
    );
};

export default notice;