import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {

  const [finishridePanel, setFinishridePanel] = useState(false)
  const finishridePanelRef = useRef(null)


  useGSAP(
    function () {
      if (finishridePanel) {
        gsap.to(finishridePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishridePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishridePanel]
  );
  return (
    <div className="h-screen relative">
    
      <div className="fixed top-0 p-6 items-center justify-between w-screen  flex">
        <img
          className="w-16"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=" loading image"
        />
      </div>
      <div onClick={()=>{
        setFinishridePanel(true)
      }} className="h-1/5 p-6 items-center justify-between relative flex  bg-yellow-400">
      <h5
        className="p-1 text-center  w-[93%] absolute top-0"
        onClick={() => {
        }}
      >
        <i className="text-3xl text-gray-700 ri-arrow-up-wide-line  "></i>
      </h5>
      <h4 className="text-xl font-semibold"> 4 KM Away</h4>
      <button className="bg-green-500 text-white p-3 px-10 rounded-lg font-semibold">Complete Ride</button>
      </div><div
        ref={finishridePanelRef}
        className=" fixed  w-full py-10 pt-12 px-3 translate-y-full bottom-0 bg-white z-10"
      >
        <FinishRide setFinishridePanel={setFinishridePanel}
          
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
