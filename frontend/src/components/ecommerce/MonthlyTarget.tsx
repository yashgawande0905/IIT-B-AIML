import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import API from "../../api/api";
import { useEquipmentStore } from "../../store/useEquipmentStore";

export default function MonthlyTarget() {
  const summary = useEquipmentStore((s) => s.summary);
  const setSummary = useEquipmentStore((s) => s.setSummary);

  // Compute from global store (NO LOCAL STATE)
  const validRows = summary?.total_count || 0;
  const qualityScore = summary
    ? Math.round(((summary.total_count - summary.missing_values) / summary.total_count) * 100)
    : 0;

  // Upload CSV
  const handleUpload = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await API.post("/upload/", fd);
      setSummary(res.data);   // global store updates → stays across pages
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const options: ApexOptions = {
    colors: ["#4F46E5"],
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "75%" },
        dataLabels: {
          value: {
            fontSize: "34px",
            fontWeight: 600,
            formatter: (v) => `${v}%`,
          },
          name: { show: false },
        },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 pb-11 bg-white dark:bg-gray-900 rounded-2xl shadow-default">

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold dark:text-white">
              Data Quality Score
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Based on uploaded dataset</p>
          </div>
        </div>

        <Chart options={options} series={[qualityScore]} type="radialBar" height={300} />

        <div className="mt-6 flex flex-col items-center">
          <label
            htmlFor="csvUpload"
            className="px-5 py-2.5 bg-brand-500 text-white rounded-xl cursor-pointer"
          >
            Upload CSV File
          </label>

          <input
            id="csvUpload"
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => e.target.files && handleUpload(e.target.files[0])}
          />
        </div>
      </div>

      <div className="flex justify-center gap-6 py-4">
        <Stat label="Total Rows" value={validRows} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-gray-500">{label}</p>
      <p className="text-lg font-semibold dark:text-white">{value}</p>
    </div>
  );
}
