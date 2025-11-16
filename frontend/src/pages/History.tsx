import { useEffect, useState } from "react";
import API from "../api/api";
import PageMeta from "../components/common/PageMeta";

export default function HistoryPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    API.get("/history/")
      .then((res) => setItems(res.data || []))  // FIXED
      .catch(() => setItems([]));
  }, []);

  return (
    <>
      <PageMeta
        title="History | Chemical Equipment Visualizer"
        description="View the history of all uploaded and validated datasets."
      />

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          History
        </h1>

        <div className="grid gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-semibold dark:text-white">
                {item.file_name}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Valid Rows: {item.summary.valid_rows} | Missing:{" "}
                {item.summary.missing_values} | Invalid:{" "}
                {item.summary.invalid_entries}
              </p>
            </div>
          ))}

          {items.length === 0 && (
            <div className="text-gray-500 dark:text-gray-400">
              No history found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
