import {
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
  PieChartIcon,
  BoltIcon,
} from "../../icons";

import Badge from "../ui/badge/Badge";
import { useEquipmentStore } from "../../store/useEquipmentStore";
import { defaultSummary } from "../../api/api";


export default function EcommerceMetrics() {
  // Always returns safe values

  const summary = useEquipmentStore((s) => s.summary) ?? defaultSummary;
  const avg = summary.averages;
  const typeDist: Record<string, number> = (summary as any).type_distribution ?? {};

  const cards = [
    {
      title: "Equipment Types",
      value: Object.keys(typeDist).length,
      icon: <GroupIcon className="size-6 dark:text-white" />,
      iconBg: "bg-gray-200 dark:bg-gray-800",
    },
    {
      title: "Avg Flowrate (m³/hr)",
      value: avg.Flowrate.toFixed(3),
      icon: <BoxIconLine className="size-6 text-blue-600" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Avg Pressure (bar)",
      value: avg.Pressure.toFixed(3),
      icon: <PieChartIcon className="size-6 text-yellow-600" />,
      iconBg: "bg-yellow-100 dark:bg-yellow-900/20",
    },
    {
      title: "Avg Temperature (°C)",
      value: avg.Temperature.toFixed(3),
      icon: <BoltIcon className="size-6 text-red-600" />,
      iconBg: "bg-red-100 dark:bg-red-900/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="h-44 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800"
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}
          >
            {card.icon}
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.title}
              </p>
              <h4 className="text-2xl font-bold dark:text-white">
                {card.value}
              </h4>
            </div>

            <Badge color="success">
              <ArrowUpIcon />
              <span className="ml-1">Live</span>
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
