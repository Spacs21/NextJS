import Image from "next/image";
import img from "@/assets/img.png"

export default function Home() {
  return (
    <div className="bg-[#232536]">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center py-32">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-[56px] w-[600px] font-bold leading-[68px]">Transform Your Idea Into Reality with Finsweet</h2>
            <p className="text-[#ffffff9c] w-[470px]">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
            <button className="bg-[#3C4BFF] text-white font-medium py-3 px-6 rounded-lg w-[219px] h-[64px] hover:opacity-70 duration-500">Request Quote →</button>
          </div>
          <div>
            <Image src={img} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}
