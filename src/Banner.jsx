import React from "react";
import { GoDot } from "react-icons/go";

function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center">
        <img
          className="h-96 border rounded-full"
          src="profile-pic.png"
          alt=""
        />
      </div>
      <div
        className="text-5xl font-bold text-slate-800 text-center p-8"
        style={{ textShadow: "0 0 5px rgba(50, 80, 246, 0.5)" }}
      >
        SAZZAD BASHAR RAKIB
      </div>
      <div className="text-lg  text-[#868A9B] flex items-center justify-center bg-[#f5f5f5] w-64 h-10 mx-auto">
        <p className="flex items-center">
          <GoDot />
          Web Developer
        </p>
      </div>
    </div>
  );
}

export default Banner;
