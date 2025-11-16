export default function GeneratePDF() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">Generate PDF</h1>

      <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <button className="px-6 py-3 rounded-xl bg-brand-500 text-white">
          Download Report
        </button>
      </div>
    </div>
  );
}
