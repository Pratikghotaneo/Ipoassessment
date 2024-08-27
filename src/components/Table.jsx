import React from "react";

import ImgWithText from "./ImgWithText";
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto md:p-4">
      <table className="w-full text-sm text-left  text-gray-300">
        <thead className="text-xs text-gray-500 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company / Issue date
            </th>
            <th scope="col" className="px-6 py-3">
              Issue size
            </th>
            <th scope="col" className="px-6 py-3">
              Price range
            </th>
            <th scope="col" className="px-6 py-3">
              Min invest/qty
            </th>
          </tr>
        </thead>
        <tbody className="text-left">
          {data.map((ele, index) => (
            <tr
              className="bg-white border-b hover:bg-slate-100 cursor-pointer"
              key={index}
              onClick={() => navigate(`/details/${index + 1}`)}
            >
              <td>
                <ImgWithText
                  imgUrl={ele.image}
                  title={ele.company}
                  timeSpan={ele.issueDate}
                />
              </td>
              <td className="text-sm font-semibold text-gray-700 px-6 py-3">
                {ele.issueSize} Crores
              </td>
              <td className="text-sm font-semibold text-gray-700 px-6 py-3">
                ₹{ele.priceRange.minPrice} - {ele.priceRange.maxPrice}
              </td>
              <td className="px-6 py-3">
                <h2 className="text-sm font-semibold text-gray-700">
                  {ele.minInvestment.amount}
                </h2>
                <span className="text-xs text-gray-400">
                  {ele.minInvestment.quantity}/ Lots
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
