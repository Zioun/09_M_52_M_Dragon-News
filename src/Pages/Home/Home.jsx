import { useLoaderData } from "react-router-dom";
import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import News from "./News";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div className="">
      <Header></Header>
      <div className="my-5">
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-12 gap-x-5 mt-20">
        <div className="col-span-3">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col gap-5">
            {
                news.map(news => <News key={news._id} news={news}></News>)
            }
          </div>
        </div>
        <div className="col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
