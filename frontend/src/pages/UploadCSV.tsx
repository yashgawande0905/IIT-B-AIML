import MonthlyTarget from "../components/Dashboard/DashboardCsv";
import PageMeta from "../components/common/PageMeta";

export default function UploadCSV() {
  return (
    <>
      <PageMeta
        title="Upload CSV | Chemical Equipment Visualizer"
        description="Upload CSV files for processing and analysis."
      />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          Upload CSV
        </h1>

        <div className="grid gap-6">
          <MonthlyTarget />
        </div>
      </div>
    </>
  );
}
