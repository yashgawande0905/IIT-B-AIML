import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";

export default function PressurePage() {
  return (
    <>
      <PageMeta
        title="Pressure Analysis | Chemical Equipment Visualizer"
        description="Analyze pressure variations and performance."
      />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          Pressure Analysis
        </h1>

        <div className="grid gap-6">
          <StatisticsChart type="pressure" />
        </div>
      </div>
    </>
  );
}
