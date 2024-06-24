import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import { Main } from "./styled.js";

// Обёртка для контента страниц
function PageWrapper({stars, buyOptions}) {
  return (
    <>
    <Header/>
    <Main className="page-wrapper__main">
      <Outlet />
    </Main>
    <Footer/>
  </>
  );
}

export default PageWrapper;