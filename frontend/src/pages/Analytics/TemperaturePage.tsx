import StatisticsChart from "../../components/Dashboard/EquipStats";
import PageMeta from "../../components/common/PageMeta";

export default function TemperaturePage() {
  return (
    <>
      <PageMeta
        title="Temperature Analysis | Chemical Equipment Visualizer"
        description="Analyze temperature variations across datasets."
      />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          Temperature Analysis
        </h1>

        <div className="grid gap-6">
          <StatisticsChart type="temperature" />
        </div>
      </div>
    </>
  );
}
