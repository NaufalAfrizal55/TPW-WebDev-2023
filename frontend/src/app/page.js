import Image from "next/image";
import ourProduct from "../../public/btn_ourProduct.svg";
import joinNow from "../../public/btn_join.svg";
import heroSquare from "../../public/hero_kotak.svg";
import kopiIcon from "../../public/heroKopi.svg";
import Link from "next/link";
import keyImg from "../../public/icon/key.svg";
import BeanMasters from "../../public/logo/beanmaster.svg";

export default function Home() {
  return (
    <main id="home">
      <section className="h-screen w-full flex ">
        {/* Headline */}
        <div className="w-[45%] flex items-center pl-32">
          <div>
            <div>
              <div className="relative">
                <h1 className="font-black font-inter text-[70px] leading-[70px] 2xl:text-[100px] 2xl:leading-[101.5px] 3xl:text-[120px] 3xl:leading-[101.50px] text-transparent bg-clip-text bg-gradient-to-br from-text-lightBrown to-text-darkBrown  tracking-wide absolute z-10">
                  BEAN
                  <br />
                  MASTERS
                </h1>
                <h1 className="z-0 font-black font-inter text-[70px] leading-[70px] 2xl:text-[100px] 2xl:leading-[101.5px] 3xl:text-[120px] 3xl:leading-[101.50px] tracking-wide text-shadow ">
                  BEAN
                  <br />
                  MASTERS
                </h1>
              </div>

              <h2 className="text-[40px] 2xl:text-[50px] 3xl:text-[61px] font-black leading-[101.50px] tracking-wide -mt-[10px] text-shadow">
                COFFEE ROASTERY
              </h2>
              <p className="text-xl 2xl:text-2xl leading-[23px] 2xl:leading-[26.5px] w-[497px] 2xl:w-[597px] h-[108px] 2xl:h-[108px] text-zinc-900 font-medium font-inter">
                Source and roast high-quality coffee beans from around the
                world, using our expertise & experience to bring out the best
                flavors and aromas
              </p>
            </div>

            <div
              href
              className="flex gap-4 items-center -mt-[30px] 2xl:-mt-[10px] "
            >
              <Link href="#">
                <Image
                  src={ourProduct}
                  className="w-[160px] 2xl:w-[244px]"
                  alt="our product"
                ></Image>
              </Link>
              <Link href="./login" alt="join now">
                <Image
                  src={joinNow}
                  className="w-[126px] 2xl:w-[200px] hover:motion-safe:animate-bounce"
                ></Image>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="relative w-[55%] flex flex-row items-center justify-end overflow-hidden">
          <div className="relative -z-10">
            <Image
              src={heroSquare}
              className="w-[320px] 2xl:w-[480px] 3xl:w-[666px]"
              alt="heroSquare"
            ></Image>
            {/* width={450}*/}
          </div>
          <div className="absolute inset-0 flex items-center justify-end rotate-[-3.15deg]">
            <Image
              src={kopiIcon}
              className="w-[620px] 2xl:w-[720px] 3xl:w-[987.5px]"
              alt="kopiIcon"
            ></Image>
            {/* width={680}  */}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="h-screen w-full" id="product">
        <div className="rotate-[1.94deg] w-full mt-[80px] 3xl:mt-[104px] ">
          <div className="relative flex overflow-x-hidden justify-center items-center text-white h-[80px] bg-text-800">
            <div className=" animate-marquee whitespace-nowrap">
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
            className="w-[50px] 3xl:w-[71px]"
          ></Image>
          <h2 className="font-inter font-bold text-[40px] 3xl:text-[60px] text-brown-900">
            Explore our top products
          </h2>
          <p className="font-inter font-semibold text-[18px] 3xl:text-[24px]">
            Top in the world, came with three favourite beans, single origin,
            blended, and flavored
          </p>
        </div>
      </section>
    </main>
  );
}
//leading-relaxed
{
  /* <h1
className="text-transparent text-[120px] bg-clip-text bg-gradient-to-br from-text-lightBrown to-text-darkBrown font-black font-Inter leading-[101.50px] tracking-wide drop-shadow-md

"
>
BEAN
<br />
MASTERS
</h1>
<h2 className="text-[61px] font-black">COFFEE ROASTERY</h2>
<div className="w-[597px] h-[108px] text-zinc-900 text-[24px] leading-[26.5px] font-medium font-Inter ">
Source and roast high-quality coffee beans from around the world,
using our expertise & experience to bring out the best flavors and
aromas
</div> */
}
