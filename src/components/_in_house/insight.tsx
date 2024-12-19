import ConsultationChart from "../charts/consulations";
import PastPeriodChart from "../charts/pastPeriod";
import ForecastCard from "./forecast";

const Insight = () => {
  return (
    <div className="pt-8 mb-8">
      <h3 className="font-medium text-xl mb-4">Insights</h3>
      <section className="flex">
        <ConsultationChart />
        <PastPeriodChart />
        <ForecastCard />
      </section>
    </div>
  );
};

export default Insight;
