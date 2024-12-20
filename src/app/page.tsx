import Glance from "@/components/_in_house/glance";
import Insight from "@/components/_in_house/insight";
import OrdersTable from "@/components/_in_house/orderTable";
import SideNav from "@/components/_in_house/sidenav";
import UpperNav from "@/components/_in_house/uppernav";

export default function Home() {
  return (
    <div className="overflow-y-scroll flex-grow px-4 pt-6">
      <div className="rounded-2xl px-5 pt-4 pb-8 min-h-full shadow-md border-[1px] border-[#DCDFE4]">
        <Glance />
        <Insight />
        <OrdersTable />
      </div>
    </div>
  );
}
