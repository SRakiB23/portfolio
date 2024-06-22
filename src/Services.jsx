import React from "react";
import { RxDividerHorizontal } from "react-icons/rx";

function Services() {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <p className="text-xl text-[#898A9B] py-2 flex items-center">
          <RxDividerHorizontal className="text-6xl pr-4" />
          SERVICES
        </p>
        <h3 className="text-black font-bold text-4xl pt-4 mb-8">
          Quality Services
        </h3>
      </div>
      <div className="py-8 flex justify-evenly">
        <div className="bg-[#F7F7F7] w-[376px] h-[370px]">
          <div className="p-14">
            <h2 className="text-8xl font-bold">01</h2>
            <h3 className="text-xl py-3 font-medium">Web Developement</h3>
            <p>
              Ensure your site is visually appealing, responsive, and fully
              functional across all devices.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-[376px] h-[370px]">
          <div className="p-14">
            <h2 className="text-8xl font-bold">02</h2>
            <h3 className="text-xl py-3 font-medium">Quality Product</h3>
            <p>
              Delivering a quality product means providing high-performance,
              secure, and scalable web solutions that meet the specific needs of
              your business.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] w-[376px] h-[370px]">
          <div className="p-14">
            <h2 className="text-8xl font-bold">03</h2>
            <h3 className="text-xl py-3 font-medium">
              Full Stack Applications
            </h3>
            <p>
              Full stack applications involve comprehensive development that
              includes both front-end and back-end technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
