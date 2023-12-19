import Image from "next/image";
import ourProduct from "../../public/btn_ourProduct.svg";
import joinNow from "../../public/btn_join.svg";
import heroSquare from "../../public/hero_kotak.svg";
import kopiIcon from "../../public/heroKopi.svg";
import Link from "next/link";
import keyImg from "../../public/icon/key.svg";
import BeanMasters from "../../public/logo/beanmaster.svg";
import Card from "./components/productCard";
import CarePlanet from "./components/carePlanet";
import Intensitiviti from "./components/intensitiviti";
import Contact from "./components/contact";
import { RxArrowRight } from "react-icons/rx";

export default function Home() {
  return (
    <main id="home" className=" overflow-hidden">
      <section className="h-screen w-full flex flex-col lg:flex-row ">
        {/* Headline */}
        <div className="basis-[45%] flex items-center pl-10 lg:pl-32 mt-[50px] mb-6 lg:mb-auto lg:mt-auto">
          <div>
            <div>
              <div className="relative ">
                <h1 className="font-black font-inter text-[50px] leading-[50px] md:text-[70px] md:leading-[70px] 2xl:text-[100px] 2xl:leading-[101.5px] 3xl:text-[120px] 3xl:leading-[101.50px] text-transparent bg-clip-text bg-gradient-to-br from-text-lightBrown to-text-darkBrown tracking-wide absolute z-10">
                  BEAN
                  <br />
                  MASTERS
                </h1>
                <h1 className="z-0 font-black font-inter text-[50px] leading-[50px] md:text-[70px] md:leading-[70px] 2xl:text-[100px] 2xl:leading-[101.5px] 3xl:text-[120px] 3xl:leading-[101.50px] tracking-wide text-shadow ">
                  BEAN
                  <br />
                  MASTERS
                </h1>
              </div>

              <h2 className=" text-[25px] md:text-[40px] 2xl:text-[50px] 3xl:text-[61px] font-black leading-[70px] md:leading-[101.50px] tracking-wide -mt-[10px] text-shadow">
                COFFEE ROASTERY
              </h2>
              <p className=" text-sm md:text-xl 2xl:text-2xl leading-[23px] 2xl:leading-[26.5px] w-[320px] md:w-[497px] 2xl:w-[597px] h-[108px] 2xl:h-[108px] text-zinc-900 font-medium font-inter">
                Source and roast high-quality coffee beans from around the
                world, using our expertise & experience to bring out the best
                flavors and aromas
              </p>
            </div>

            <div className="flex gap-4 items-center lg:mt-2 2xl:mt-2 ">
              <Link href="/#product">
                <Image
                  src={ourProduct}
                  className="w-[160px] 2xl:w-[244px] hover:scale-110"
                  alt="our product"
                ></Image>
              </Link>
              <Link href="/login">
                <Image
                  src={joinNow}
                  className="w-[126px] 2xl:w-[200px] hover:scale-110"
                  alt="join now"
                ></Image>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="relative basis-[55%] flex flex-row items-center justify-end overflow-hidden">
          <div className="relative -z-10">
            <Image
              src={heroSquare}
              className="w-[320px] 2xl:w-[480px] 3xl:w-[666px]"
              alt="heroSquare"
            ></Image>
            {/* width={450}*/}
          </div>
          <div className="absolute inset-0 flex items-center justify-end rotate-[-3.15deg] hover:scale-110 lg:scale-100">
            <Image
              src={kopiIcon}
              className="w-[620px] 2xl:w-[720px] 3xl:w-[987.5px]"
              alt="kopiIcon"
              priority={true}
            ></Image>
            {/* width={680}  */}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className=" w-full" id="market">
        <div className="skew-y-[4deg] mt-[80px] 3xl:mt-[104px] px-1">
          <div className="relative flex overflow-x-hidden justify-center items-center text-white h-[80px] bg-text-800">
            <div className="animate-marquee whitespace-nowrap">
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                More than a coffee roaster
              </span>
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                Discover the Art and Science of Coffee with Us
              </span>
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                More than a coffee roaster
              </span>
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                Discover the Art and Science of Coffee with Us
              </span>
            </div>

            <div className="absolute animate-marquee2 whitespace-nowrap">
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                More than a coffee roaster
              </span>
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                Discover the Art and Science of Coffee with Us
              </span>
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                More than a coffee roaster
              </span>
              <span className="mx-4 text-4xl font-inter font-semibold text-[24px]">
                Discover the Art and Science of Coffee with Us
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-[60px] 3xl:mt-[140px]">
          <Image
            src={keyImg}
            alt="keyImage"
            className="w-[50px] 3xl:w-[71px] animate-bounce"
          ></Image>
          <h2 className="font-inter font-bold text-center text-[35px] md:text-[40px] 3xl:text-[60px] text-brown-900">
            Explore our top products
          </h2>
          <p className="font-inter text-center my-9 lg:my-auto font-semibold text-[18px] 3xl:text-[24px]">
            Top in the world, came with three favourite beans, single origin,
            blended, and flavored
          </p>
        </div>
        <div>
          <Card></Card>
          <div className="flex justify-center items-center mt-7">
            <button
              type="button"
              className="bg-brown-500 text-white rounded-full px-8 py-2 flex items-center justify-center gap-1 font-semibold hover:bg-brown-100 hover:scale-105 transition ease-in-out duration-100"
            >
              More Product <RxArrowRight />
            </button>
          </div>
        </div>
      </section>
      <CarePlanet id="process" />
      <Intensitiviti id="aboutus" />
      <Contact />
    </main>
  );
}

