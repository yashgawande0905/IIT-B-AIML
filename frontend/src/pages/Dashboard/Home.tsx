import EcommerceMetrics from "../../components/Dashboard/equipdashboard";
import MonthlySalesChart from "../../components/Dashboard/MonthlyChart";
import StatisticsChart from "../../components/Dashboard/EquipStats";
import MonthlyTarget from "../../components/Dashboard/DashboardCsv";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Dashboard | Chemical Equipment Parameter Visualizer"
        description="Visualize real-time flowrate, pressure, temperature and equipment metrics for chemical engineering datasets."
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>
      </div>
    </>
  );
}
