import React from "react";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div className="  bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full">
        <img
          className="w-32 h-30 ml-3"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="img not loaded "
        />
        <div className="bg-white  pb-8 px-4 py-5">
          <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
          <Link to="/login" className= " flex justify-center bg-black text-white px-3 py-6 w-full rounded-lg mt-2">continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
