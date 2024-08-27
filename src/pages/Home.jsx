import React from "react";
import Layout from "../components/layout";
import Table from "../components/Table";
import data from "../assets/ipodata/ipoData";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-2xl text-center font-bold m-5">IPO lists</h1>
      <Table data={data} />
    </Layout>
  );
};

export default Home;
