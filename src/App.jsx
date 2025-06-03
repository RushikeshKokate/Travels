import React from "react";
import Header from "./component/Header";
import Home from "./pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";  

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
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
