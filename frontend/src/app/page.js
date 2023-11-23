import Image from "next/image";
import ourProduct from "../../public/btn_ourProduct.svg";
import joinNow from "../../public/btn_join.svg";

export default function Home() {
  return (
    <main className=" h-screen w-full flex">
      {/* Headline */}
      <div className="w-[45%] flex flex-row items-center pl-32">
        <div>
          <div>
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-br from-text-lightBrown to-text-darkBrown font-black font-Inter text-[120px] leading-[101.50px] tracking-wide drop-shadow-md

"
            >
              BEAN
              <br />
              MASTERS
            </h1>
            <h2 className="text-[61px] font-black leading-[101.50px] tracking-wide -mt-[10px] drop-shadow-md">
              COFFEE ROASTERY
            </h2>
            <p className="w-[597px] h-[108px] text-zinc-900 text-2xl leading-[26.5px] font-medium font-Inter ">
              Source and roast high-quality coffee beans from around the world,
              using our expertise & experience to bring out the best flavors and
              aromas
            </p>
          </div>

          <div className="flex gap-[17px] -mt-[10px] ">
            <Image className="" src={ourProduct}></Image>
            <Image src={joinNow}></Image>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="w-[55%] ">Hero</div>
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
