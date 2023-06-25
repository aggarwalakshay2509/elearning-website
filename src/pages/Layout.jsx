import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const News = () => {
    return (
      <Fragment>
        <Header />
        <div id="mainContent">
        <Outlet/>
        </div>
        <Footer />
      </Fragment>
    );
  };
  
export default News;