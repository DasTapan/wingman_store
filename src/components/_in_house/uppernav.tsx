import { ChartPie, MessageCircleMore, Tag } from "lucide-react";

const UpperNav = () => {
  return (
    <nav className="flex px-6 py-4 mb-3 gap-x-1 items-center border-[#DCDFE4] border-b-[1px] shadow-sm">
      <div className="flex items-center gap-x-2 bg-transparent rounded-2xl group hover:bg-[#CCFBEF] px-2 py-1 hover:cursor-pointer">
        <ChartPie size={14} className="text-[#8A94A6] group-hover:text-black" />
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
  );
};

export default UpperNav;
