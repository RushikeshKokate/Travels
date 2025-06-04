import React from "react";
import Header from "./component/Header";
import Home from "./pages/Home";
import { Routes, Route, Outlet } from "react-router-dom"; 
import map from "./assets/images/map.png" 


const Layout = () => {
  return (
    <div className="flex">
    <div className="flex flex-col sm:w-[53%]">
      <Header />
      <div>
      <Outlet />
      </div>
    </div>
     <div className="sm:w-[47%] max-sm:hidden">
        <img src={map} alt="" className="  sm:w-[100%] h-[100vh]"/>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
