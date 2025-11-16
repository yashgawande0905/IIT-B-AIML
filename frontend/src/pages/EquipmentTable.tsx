import { useEffect, useState } from "react";
import API from "../api/api";
import { HistoryItem } from "../api/api";

export default function EquipmentTable() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    API.get("/history/")
      .then((res) => setHistory(res.data || []))   // FIXED HERE
      .catch(() => setHistory([]));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">
        Equipment Table
      </h1>

      <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-800/70 border-b border-gray-300 dark:border-gray-700">
            <tr>
              <th className="p-4 text-gray-700 dark:text-gray-200">File</th>
              <th className="p-4 text-gray-700 dark:text-gray-200">Valid Rows</th>
              <th className="p-4 text-gray-700 dark:text-gray-200">Missing</th>
              <th className="p-4 text-gray-700 dark:text-gray-200">Invalid</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
              >
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {item.file_name}
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {item.summary.valid_rows}
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {item.summary.missing_values}
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {item.summary.invalid_entries}
                </td>
              </tr>
            ))}

            {history.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
