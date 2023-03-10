import React from "react";

const RoomLeaving = ({ payments }) => {
  return (
    <>
      <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl leading-none font-bold text-white mb-10">
          Acquisition Overview
        </h3>
        <div className="block w-full h-[17rem] overflow-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-[#36393e72] text-gray-50 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Mail ID
                </th>
                <th className="px-4 bg-[#36393e72] text-gray-50 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Due
                </th>
                <th className="px-4 bg-[#36393e72] text-gray-50 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                  Payed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payments?.map((payment, i) => {
                const p = parseInt(((5000 - parseInt(payment?.due)) / 5000) * 100);
                return (
                  <tr key={payment?._id} className="text-gray-50">
                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      {payment?.email}
                    </th>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                      {payment?.due}
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">{p}%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className={`${
                                i % 2
                                  ? "bg-cyan-600 h-2 rounded-sm"
                                  : "bg-teal-400 h-2 rounded-sm"
                              }`}
                              // className="bg-cyan-600 h-2 rounded-sm"
                              style={{ width: `${p}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {/* <tr className="text-gray-50">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Organic Search
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                  5,649
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">30%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          className="bg-cyan-600 h-2 rounded-sm"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-50">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Referral
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                  4,025
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">24%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          className="bg-orange-300 h-2 rounded-sm"
                          style={{ width: "24%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-50">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  Direct
                </th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-90 whitespace-nowrap p-4">
                  3,105
                </td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium">18%</span>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          className="bg-teal-400 h-2 rounded-sm"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RoomLeaving;
