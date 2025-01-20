import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchpanel from "../../components/LocationSearchpanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
// shshshshspecial
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          //opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          //opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  const submitHandler = () => {};
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary usr */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="  flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5  bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-2 top-5 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base w-full  mt-5 rounded-lg"
              type="text"
              placeholder=" Add a pickup location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base w-full mt-3 rounded-lg"
              type="text"
              placeholder="Your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white  h-0">
          <LocationSearchpanel />
        </div>
        </div>
      <div className="fixed w-full z-10 bottom-0 px-3 py-6  bg-white">
        <h3 className="text-2xl font-semibold mb-6">Choose a Vehicle</h3>
        <div className="flex border-2  active:border-black rounded-xl mb-2  p-3 w-full items-center justify-between ">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className=" ml-5 w-1/2">
            <h4 className="font-medium text-base">
              UberGo <span><i className="ri-user-fill"></i>3</span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable,compact ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">₨195.55</h2>
        </div>
        <div className="flex border-2 active:border-black rounded-xl mb-2  p-3 w-full items-center justify-between ">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="ml-8 w-1/2">
            <h4 className="font-medium text-base">
              Moto <span><i className="ri-user-fill"></i>1</span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable,compact ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">₨65.55</h2>
        </div>
        <div className="flex border-2 active:border-black rounded-xl mb-2  p-3 w-full items-center justify-between ">
          <img
            className="h-14 px-3"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className=" ml-8 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto <span><i className="ri-user-fill"></i>3</span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable,compact ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">₨20.55</h2>
        </div>
        

      </div>
    </div>
  );
};

export default Home;