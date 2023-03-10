import Link from "next/link";
import React from "react";

const LatestTransactions = ({ rooms }) => {
  return (
    <>
      <div className=" bg-[#36393e52] shadow-lg rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Unbooked Rooms
            </h3>
            <span className="text-base font-normal text-gray-500">
              This is a list of available room
            </span>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/rooms"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg h-52">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-white">
                  <thead className=" bg-[#36393e52]">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Branch
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" bg-[#36393e52]">
                    {rooms?.map((room, i) => {
                      if (room?.status === "Available")
                        return (
                          <tr
                            className={`${i % 2 && "bg-[#36393e82]"}`}
                            key={room?._id}
                          >
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                              {room?.branch}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                              {room?.category}
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-white">
                              {room?.cost}৳
                            </td>
                          </tr>
                        );
                    })}
                    {/* <tr>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                        Payment from{" "}
                        <span className="font-semibold">Bonnie Green</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                        Apr 23 ,2021
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-white">
                        $2300
                      </td>
                    </tr>
                    <tr className=" bg-[#36393e82]">
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                        Payment refund to{" "}
                        <span className="font-semibold">#00910</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                        Apr 23 ,2021
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-white">
                        -$670
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                        Payment failed from{" "}
                        <span className="font-semibold">#087651</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-white">
                        Apr 18 ,2021
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-white">
                        $234
                      </td>
                    </tr> */}
                    {/* <tr className="bg-gray-50">
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Lana Byrd
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 15 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $5000
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Jese Leos
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 15 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $2300
                                    </td>
                                  </tr>
                                  <tr className="bg-gray-50">
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        THEMESBERG LLC
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 11 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $560
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                      Payment from{" "}
                                      <span className="font-semibold">
                                        Lana Lysle
                                      </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                      Apr 6 ,2021
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                      $1437
                                    </td>
                                  </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTransactions;
