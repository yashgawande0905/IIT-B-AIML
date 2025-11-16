import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEquipmentStore } from "../../store/useEquipmentStore";

interface Props {
  type?: "flowrate" | "pressure" | "temperature" | "all";
}

export default function StatisticsChart({ type = "all" }: Props) {
  const monthly = useEquipmentStore((s) => s.monthly) || {
    flowrate: Array(12).fill(0),
    pressure: Array(12).fill(0),
    temperature: Array(12).fill(0),
  };

  const series = [];

  if (type === "flowrate" || type === "all") {
    series.push({ name: "Flowrate", data: monthly.flowrate });
  }
  if (type === "pressure" || type === "all") {
    series.push({ name: "Pressure", data: monthly.pressure });
  }
  if (type === "temperature" || type === "all") {
    series.push({ name: "Temperature", data: monthly.temperature });
  }

  const options: ApexOptions = {
    chart: { type: "line", fontFamily: "Outfit" },
    stroke: { curve: "smooth", width: 3 },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    },
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5">
      <h3 className="text-lg font-semibold dark:text-white mb-4">
        {type === "flowrate" && "Flowrate Trend"}
        {type === "pressure" && "Pressure Trend"}
        {type === "temperature" && "Temperature Trend"}
        {type === "all" && "Equipment Statistics"}
      </h3>

      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
}
