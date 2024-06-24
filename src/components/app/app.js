import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page.jsx";
import BuyPage from "../pages/buy-page/buy-page.jsx";
import ScrollToTop from "../../util/scroll-to-top.jsx";

import images from "../../mocks/images/index";
import starList from "../../mocks/starList.js";
import buyOptions from "../../mocks/buy-options";

import { GlobalStyle } from "./styles";



export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
            <Route index element={<MainPage stars={starList} />} />
            <Route path={AppRoute.BUY.replace(AppRoute.MAIN, "")} element={<BuyPage images={images} buyOptions={buyOptions} />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
