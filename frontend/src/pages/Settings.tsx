import PageMeta from "../components/common/PageMeta";

export default function Settings() {
  return (
    <>
      <PageMeta
        title="Settings | Chemical Equipment Visualizer"
        description="Configure your application preferences and account settings."
      />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          Settings
        </h1>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Settings panel content goes here…
          </p>
        </div>
      </div>
    </>
  );
}
