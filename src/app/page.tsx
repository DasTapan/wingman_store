import Glance from "@/components/_in_house/glance";
import Insight from "@/components/_in_house/insight";
import {
  ChartPie,
  HomeIcon,
  MessageCircle,
  MessageCircleMore,
  Tag,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex">
      {/* SideNav */}
      <div className="flex flex-col w-[60px] h-full">
        <section className="bg-[#115E56] h-[60%] flex flex-col items-center justify-between py-3 text-white">
          <div className="">
            <Image
              src="logo/wingstore_logo.svg"
              width={30}
              height={30}
              alt="wingstore_logo"
              className="mb-14 mx-auto"
            />
            <div className="flex flex-col gap-y-5 items-center">
              <div className="group bg-transparent hover:bg-white hover:cursor-pointer transition-all rounded-[8px] p-2">
                <HomeIcon
                  size={17}
                  className="group-hover:text-[#115E56] text-[#CCFBEF]"
                />
              </div>
              <div className="group bg-transparent hover:bg-white hover:cursor-pointer transition-all rounded-[8px] p-2">
                <MessageCircle
                  size={17}
                  className="group-hover:text-[#115E56] text-[#CCFBEF]"
                />
              </div>
              <div className="group bg-transparent hover:bg-white hover:cursor-pointer transition-all rounded-[8px] p-2">
                <Users
                  size={17}
                  className="group-hover:text-[#115E56] text-[#CCFBEF]"
                />
              </div>
            </div>
          </div>
          <Image
            src="icons/gear.svg"
            width={20}
            height={20}
            alt="gear_setting"
          />
        </section>
        <section className="h-[40%]"></section>
      </div>
      <div className="border-4 flex-grow border-yellow-400 min-h-full flex flex-col">
        {/* UpperNav */}
        <nav className="flex px-6 py-4 mb-3 gap-x-1 items-center border-[#DCDFE4] border-b-[1px] shadow-sm">
          <div className="flex items-center gap-x-2 bg-transparent rounded-2xl group hover:bg-[#CCFBEF] px-2 py-1 hover:cursor-pointer">
            <ChartPie
              size={14}
              className="text-[#8A94A6] group-hover:text-black"
            />
            <span className="text-[#8A94A6] group-hover:text-black text-sm">
              Summary
            </span>
          </div>
          <div className="flex items-center gap-x-2 bg-transparent rounded-2xl group hover:bg-[#CCFBEF] px-2 py-1 hover:cursor-pointer">
            <Tag size={14} className="text-[#8A94A6] group-hover:text-black" />
            <span className="text-[#8A94A6] group-hover:text-black text-sm">
              Sales
            </span>
          </div>
          <div className="flex items-center gap-x-2 bg-transparent rounded-2xl group hover:bg-[#CCFBEF] px-2 py-1 hover:cursor-pointer">
            <MessageCircleMore
              size={14}
              className="text-[#8A94A6] group-hover:text-black"
            />
            <span className="text-[#8A94A6] group-hover:text-black text-sm">
              Chats
            </span>
          </div>
        </nav>
        <div className="overflow-y-scroll flex-grow px-4 pt-3">
          <div className="rounded-2xl px-5 py-4 min-h-full shadow-md border-[1px] border-[#DCDFE4]">
            <Glance />
            <Insight />
          </div>
        </div>
      </div>
    </main>
  );
}
