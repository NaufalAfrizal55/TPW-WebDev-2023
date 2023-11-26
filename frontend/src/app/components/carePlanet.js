import React from "react";
import Image from "next/image";
import Group1 from "../../../public/img/group1.svg";
import Group2 from "../../../public/img/group2.svg";
import Group3 from "../../../public/img/group3.svg";
import Group4 from "../../../public/img/group4.svg";

export function carePlanet({ id }) {
  return (
    <section className="w-full" id={id}>
      <div>
        <h1 className="text-[48px] 2xl:text-[60px] mt-[100px] 2xl:mt-[150px] text-brown-900 font-inter text-center">
          A journey of <span className="font-bold">Responsibility</span> and{" "}
          <span className="font-bold">Care</span>
        </h1>
      </div>

      {/* <div className=" flex container my-10 mx-10"> */}
      <div className="grid grid-rows-4 lg:grid-rows-none lg:grid lg:grid-cols-2 justify-center items-center mb-[50px] mt-8 mx-10 gap-5 2xl:gap-[52px] ">
        <div className="hover:scale-125 md:hover:scale-110 hover:bg-page hover:shadow-lg hover:rounded-lg hover:shadow-neutral-500 p-4 transition ease-in-out duration-200 ">
          <div>
            <Image src={Group1} alt={"grup1"} />
          </div>
        </div>
        <div className="hover:scale-125  md:hover:scale-110 hover:bg-page hover:shadow-lg hover:rounded-lg hover:shadow-neutral-500 p-4 transition ease-in-out duration-200 ">
          <div>
            <Image src={Group2} alt={"grup2"} />
          </div>
        </div>
        <div className="hover:scale-125 md:hover:scale-110 hover:bg-page hover:shadow-lg hover:rounded-lg hover:shadow-neutral-500 p-4 transition ease-in-out duration-200 ">
          <div>
            <Image src={Group3} alt={"grup3"} />
          </div>
        </div>
        <div className="hover:scale-125 md:hover:scale-110 hover:bg-page hover:shadow-lg hover:rounded-lg hover:shadow-neutral-500 p-4 transition ease-in-out duration-200 ">
          <div>
            <Image src={Group4} alt={"grup4"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default carePlanet;
