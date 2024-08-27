import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumes = () => {
  const { pathname } = useLocation();

  const path = pathname.split("/").filter((e) => e && !/^\d+$/.test(e));
  return (
    <>
      <div className="hidden md:flex items-center text-sm text-gray-600 font-light gap-2 mt-4">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        {path.map((e, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaAngleRight />
            {index === path.length - 1 ? (
              <span className="cursor-pointer">{e}</span>
            ) : (
              <Link to={`/${e}`} className="cursor-pointer">
                {e}
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BreadCrumes;
