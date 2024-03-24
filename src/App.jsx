import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LinearIndeterminate from "./components/common/Loading";

const Landingpage = lazy(() => import("./components/Landingpage"));
const Compare = lazy(() => import("./components/Compare"));
const Dashboard = lazy(() => import("./components/Dashbord"));
const Top = lazy(() => import("./components/common/BackToTop/top"));
const Coin = lazy(() => import("./components/Coin/Index"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<LinearIndeterminate />}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="coin/:coinid" element={<Coin />} />
        </Routes>
        {/* <Footer /> */}
        <Top />
      </Suspense>
    </div>
  );
}

export default App;
