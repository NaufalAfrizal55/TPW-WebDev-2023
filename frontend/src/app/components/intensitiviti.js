import React from "react";
import Image from "next/image";
import Planet from "../../../public/img/savePlanet.svg";
import NoStraw from "../../../public/icon/noStraw.svg";
import FairTrade from "../../../public/icon/fairTrade.svg";
import EcoFriendly from "../../../public/icon/ecoFriendly.svg";
import Carbon from "../../../public/icon/carbon.svg";
import { RxArrowRight } from "react-icons/rx";

const Intensitiviti = ({ id }) => {
  return (
    <section className="h-auto mt-auto lg:mt-0" id={id}>
      <div className="flex flex-col justify-center items-center lg:justify-normal lg:flex-row gap-7 mt-20 mx-[60px]">
        <div className="flex justify-center lg:flex-none lg:justify-normal lg:basis-[40%]">
          <Image
            src={Planet}
            className="w-[500px] 2xl:w-[600px] 3xl:w-[753px] justify-end animate-spin-slow"
          />
        </div>
        <div className="lg:w-[59%] grid grid-rows-4">
          {/* 1 */}
          <div className="">
            <h2 className=" text-brown-900 font-inter font-medium text-[48px] 2xl:text-[50px] 3xl:text-[60px] md:text-justify">
              How we care for the <strong>Planet</strong> and the{" "}
              <strong>People</strong>
            </h2>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-none grid-rows-2 md:grid-cols-2 md:grid-rows-none items-center gap-4">
            {/* No Straw */}
            <div className="flex items-center gap-3">
              <Image
                src={NoStraw}
                alt="no straw"
                className=" w-[80px] 2xl:w-[100px] 3xl:w-[120px]"
                // w-[380px] 2xl:w-[450px] 3xl:w-[492px]"
              />
              <div className="text-brown-900 font-body">
                <h3 className="text-[20px] 2xl:text-[26px] 3xl:text-[30px]">
                  <strong>No straw policy</strong>
                </h3>
                <span className="text-[15px] 2xl:text-[18px] 3xl:[24px]">
                  We have eliminated plastic from our products, and replaced
                  them with biodegradable alternatives
                </span>
              </div>
            </div>
            {/* Fair trade */}
            <div className="flex items-center gap-3">
              <Image
                src={FairTrade}
                alt="no straw"
                className=" w-[80px] 2xl:w-[100px] 3xl:w-[120px]"
                // w-[380px] 2xl:w-[450px] 3xl:w-[492px]"
              />
              <div className="text-brown-900 font-body">
                <h3 className="text-[18px] 2xl:text-[26px] 3xl:text-[30px]">
                  <strong>Fair trade and organic certification</strong>
                </h3>
                <span className="text-[15px] leading-[0.5] 2xl:text-[18px] 3xl:[24px]">
                  We have eliminated plastic from our products, and replaced
                  them with biodegradable alternatives
                </span>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="grid grid-cols-none grid-rows-2 md:grid-cols-2 md:grid-rows-none items-center gap-4 mt-3">
            {/* eco friendly */}
            <div className="flex items-center gap-3">
              <Image
                src={EcoFriendly}
                alt="no straw"
                className=" w-[80px] 2xl:w-[100px] 3xl:w-[120px]"
                // w-[380px] 2xl:w-[450px] 3xl:w-[492px]"
              />
              <div className="text-brown-900 font-body">
                <h3 className="text-[20px] 2xl:text-[26px] 3xl:text-[30px]">
                  <strong>Eco-friendly Packaging</strong>
                </h3>
                <span className="text-[15px] 2xl:text-[18px] 3xl:[24px]">
                  We use biodegradable and compostable packaging materials for
                  our products
                </span>
              </div>
            </div>
            {/* carbon footprint */}
            <div className="flex items-center gap-3">
              <Image
                src={Carbon}
                alt="no straw"
                className=" w-[80px] 2xl:w-[100px] 3xl:w-[120px]"
                // w-[380px] 2xl:w-[450px] 3xl:w-[492px]"
              />
              <div className="text-brown-900 font-body">
                <h3 className="text-[18px] 2xl:text-[26px] 3xl:text-[30px]">
                  <strong>Carbon footprint reduction</strong>
                </h3>
                <span className="text-[15px] 2xl:text-[18px] 3xl:[24px]">
                  We monitor and measure our carbon footprint, and take steps to
                  reduce it
                </span>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className=" mt-4">
            <button
              type="button"
              className="bg-brown-500 text-white rounded-full px-8 py-2  flex items-center justify-center gap-1 font-semibold hover:bg-brown-100 hover:scale-105 transition ease-in-out duration-100"
            >
              About Us <RxArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intensitiviti;
