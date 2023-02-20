import React from 'react';
import Counting from './Counting';
import LatestCustomers from './LatestCustomers';
import LatestTransactions from './LatestTransactions';
import RoomLeaving from './RoomLeaving';
import RoomRequests from './RoomRequests';

const MainAdminDashboardHome = () => {
    return (
        <div>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <RoomRequests></RoomRequests>
                <LatestTransactions></LatestTransactions>
            </div>
            <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Counting></Counting>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                <LatestCustomers></LatestCustomers>
                <RoomLeaving></RoomLeaving>
            </div>
        </div>
    );
};

export default MainAdminDashboardHome;