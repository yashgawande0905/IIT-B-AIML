import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { MoreDotIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useEquipmentStore } from "../../store/useEquipmentStore";

export default function MonthlySalesChart() {
  const [isOpen, setIsOpen] = useState(false);

  const monthly = useEquipmentStore((s) => s.monthly) || {
    flowrate: Array(12).fill(0),
  };

  const series = [
    {
      name: "Avg Flowrate (m³/hr)",
      data: monthly.flowrate || Array(12).fill(0),
    },
  ];

  const options: ApexOptions = {
    chart: { type: "bar", fontFamily: "Outfit" },
    plotOptions: { bar: { borderRadius: 6 } },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec",
      ],
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
      <div className="flex justify-between mb-3">
        <h3 className="text-lg font-semibold dark:text-white">Flowrate Trend</h3>

        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MoreDotIcon className="size-6 text-gray-500" />
          </button>

          <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <DropdownItem>Refresh</DropdownItem>
            <DropdownItem>Clear</DropdownItem>
          </Dropdown>
        </div>
      </div>

      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  );
}
