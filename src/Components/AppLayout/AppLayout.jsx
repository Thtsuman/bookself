import React from "react";
import Navbar from "../Navbar/Navbar";

const AppLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl p-4 hover:backdrop-filter hover:backdrop-blur-lg rounded-lg text-white">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
