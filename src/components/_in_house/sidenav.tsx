import { HomeIcon, MessageCircle, Users } from "lucide-react";
import Image from "next/image";
import { Settings } from "react-feather";

const SideNav = () => {
  return (
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
        <div className="group bg-transparent hover:bg-white hover:cursor-pointer transition-all rounded-[8px] p-2">
          <Settings
            size={20}
            className="group-hover:text-[#115E56] text-[#CCFBEF]"
          />
        </div>
      </section>
      <section className="h-[40%]"></section>
    </div>
  );
};

export default SideNav;
