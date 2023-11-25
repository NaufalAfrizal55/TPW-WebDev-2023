import React from "react";
import Image from "next/image";
import Planet from "../../../public/img/savePlanet.svg";

const Intensitiviti = () => {
  return (
    <section className="h-screen">
      <div className="flex gap-7 mt-20 ">
        <div className="w-[40%]">
          <Image
            src={Planet}
            className="w-[500px] 2xl:w-[600px] 3xl:w-[753px] justify-end animate-spin-slow"
          />
        </div>
        <div className="bg-black text-white w-[59%]"></div>
      </div>
    </section>
  );
};

export default Intensitiviti;
