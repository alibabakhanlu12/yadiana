import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }:any) => {
  return (
    <div className="h-screen  flex flex-row-reverse     justify-start">
      <Sidebar />
      <div dir="rtl" className="  mr-40 text-center  p-4 ">
          {children}
      </div>
    </div>
  );
};

export default Layout;
