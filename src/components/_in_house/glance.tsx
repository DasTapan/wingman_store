import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  CircleDollarSign,
  MessageCircle,
  PiggyBank,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Glance = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-medium text-xl">At a glance</h3>
        <Select>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">7 days</SelectItem>
            <SelectItem value="14">14 days</SelectItem>
            <SelectItem value="21">21 days</SelectItem>
            <SelectItem value="28">1 month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {[
          {
            logo: <MessageCircle size={15} />,
            subject: "CONSULTATIONS",
            value: 24,
            change: 15,
          },
          {
            logo: <Tag size={15} />,
            subject: "ORDERS PLACED",
            value: 12,
            change: -15,
          },
          {
            logo: <Check size={15} />,
            subject: "CONVERSION",
            value: "50%",
            change: -15,
          },
          {
            logo: <CircleDollarSign size={15} />,
            subject: "TOTAL SALES VALUE",
            value: "$2,400",
            change: 15,
          },
          {
            logo: <CircleDollarSign size={15} />,
            subject: "AVG ORDER VALUE",
            value: "$240",
            change: 15,
          },
          {
            logo: <PiggyBank size={15} />,
            subject: "COMMISSION PAID",
            value: "$240",
            change: 15,
          },
        ].map((item, idx) => (
          <Card key={idx}>
            <CardContent className="p-4 text-[#667085]">
              <div className="flex items-center gap-x-2 mb-4">
                {item.logo}
                <span className="font-bold text-xs">{item.subject}</span>
              </div>
              <div className="mb-4 font-medium text-2xl text-black">
                {item.value}
              </div>
              <div>
                {item.change > 0 ? (
                  <div className="flex items-center gap-x-1.5">
                    <TrendingUp size={17} color="#5fee56" />
                    <span className="text-[#5fee56] text-sm">
                      {item.change}%
                    </span>
                    <span className="text-xs">increase</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-x-1.5">
                    <TrendingDown size={17} color="#e6120f" />
                    <span className="text-[#e6120f] text-sm">
                      {item.change}%
                    </span>
                    <span className="text-xs">decrease</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Glance;
