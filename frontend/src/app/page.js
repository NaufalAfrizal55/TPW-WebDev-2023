import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-transparent text-[120px] bg-clip-text bg-gradient-to-br from-text-lightBrown to-text-darkBrown font-black font-Inter leading-[101.50px] tracking-wide ">
          BEAN
          <br />
          MASTERS
        </h1>
        <h2 className="text-[61px] font-black">COFFEE ROASTERY</h2>
        <div className="w-[597px] h-[108px] text-zinc-900 text-2xl font-medium font-Inter leading-relaxed">
          Source and roast high-quality coffee beans from around the world,
          using our expertise & experience to bring out the best flavors and
          aromas
        </div>
      </div>
    </main>
  );
}
