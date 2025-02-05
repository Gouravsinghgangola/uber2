import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import Ridepopup from "../components/Ridepopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUpPanel from "../components/ConfirmRidePopUpPanel";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confimRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  const ConfirmRidepopUpPanelref = useRef(null);
  const RidePopUpPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(RidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(RidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );
  useGSAP(
    function () {
      if (confimRidePopUpPanel) {
        gsap.to(ConfirmRidepopUpPanelref.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmRidepopUpPanelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confimRidePopUpPanel]
  );

  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=" loading image"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetail />
      </div>
      <div
        ref={RidePopUpPanelRef}
        className=" fixed  w-full py-10 pt-12 px-3 translate-y-full bottom-0 bg-white z-10"
      >
        <Ridepopup
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        />
      </div>
      <div
        ref={ConfirmRidepopUpPanelref}
        className=" fixed  w-full h-screen py-10 pt-12 px-3 translate-y-full bottom-0 bg-white z-10"
      >
        <ConfirmRidePopUpPanel
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
