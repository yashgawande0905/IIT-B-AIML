import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";

export default function FlowratePage() {
  return (
    <>
      <PageMeta
        title="Flowrate Analysis | Chemical Equipment Visualizer"
        description="Analyze flowrate variations and performance."
      />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          Flowrate Analysis
        </h1>

        <div className="grid gap-6">
          <StatisticsChart type="flowrate" />
        </div>
      </div>
    </>
  );
}
