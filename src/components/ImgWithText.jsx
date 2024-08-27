import React from "react";

const ImgWithText = ({ imgUrl, title, timeSpan }) => {
  return (
    <>
      <div className="rounded-full p-2 flex items-center">
        <img
          src={imgUrl}
          alt={title}
          width={50}
          height={50}
          className="rounded-[50%] border p-1"
        />
        <div className="ml-2">
          <h1 className="text-[1rem] uppercase font-semibold text-gray-900">
            {title}
          </h1>
          <p className="text-xs text-gray-400">{timeSpan}</p>
        </div>
      </div>
    </>
  );
};

export default ImgWithText;
