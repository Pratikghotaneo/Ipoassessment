import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import { FaAngleLeft } from "react-icons/fa";
import ImgWithText from "../components/ImgWithText";
import { TbFileDownload } from "react-icons/tb";
import IpoDetails from "../components/IpoDetails";
import About from "../components/About";
import downloadPdf from "../helper/downloadPdf";
import { useNavigate, useParams } from "react-router-dom";
import Timeline from "../components/Timeline";
import data from "../assets/ipodata/ipoData";
import BreadCrumes from "../components/BreadCrumes";

const DetailsIpo = () => {
  const pdfRef = useRef();
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState({});

  useEffect(() => {
    const res = data.filter((e) => parseInt(e.id) === parseInt(id));
    setDetailsData(...res);
  }, [id]);

  const navigate = useNavigate();

  return (
    <Layout>
      <BreadCrumes />
      <div className="flex justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="p-2 border shadow-md h-8 w-8 flex">
            <FaAngleLeft
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />
          </div>
          <ImgWithText
            imgUrl={detailsData.image}
            title={detailsData.company}
            timeSpan={detailsData.company}
          />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <TbFileDownload
            color="orange"
            size={35}
            onClick={() => downloadPdf(pdfRef.current)}
            className="cursor-pointer"
          />
          <button className="border bg-blue-950 text-white text-sm rounded-xl py-5 px-12">
            Apply now
          </button>
        </div>
      </div>
      <div ref={pdfRef}>
        <IpoDetails />
        <Timeline />
        <About />
      </div>
    </Layout>
  );
};

export default DetailsIpo;
