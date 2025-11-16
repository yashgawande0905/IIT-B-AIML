// --------------------------------------------------
// TYPES (Correct Summary + History Types)
// --------------------------------------------------
export interface SummaryType {
  valid_rows: number;
  missing_values: number;
  invalid_entries: number;
  total_count: number;

  averages: {
    Flowrate: number;
    Pressure: number;
    Temperature: number;
  };

  monthly: {
    flowrate: number[];
    pressure: number[];
    temperature: number[];
  };

  type_distribution: Record<string, number>;
}

export interface HistoryItem {
  file_name: string;
  valid_rows: number;
  missing_values: number;
  invalid_entries: number;
}

// --------------------------------------------------
// AXIOS CLIENT
// --------------------------------------------------
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export default API;

// --------------------------------------------------
// SAFE DEFAULT SUMMARY
// --------------------------------------------------
export const defaultSummary: SummaryType = {
  valid_rows: 0,
  missing_values: 0,
  invalid_entries: 0,
  total_count: 0,
  averages: {
    Flowrate: 0,
    Pressure: 0,
    Temperature: 0,
  },
  monthly: {
    flowrate: Array(12).fill(0),
    pressure: Array(12).fill(0),
    temperature: Array(12).fill(0),
  },
  type_distribution: {},
};
