import React from "react";
import Header from "../../header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
