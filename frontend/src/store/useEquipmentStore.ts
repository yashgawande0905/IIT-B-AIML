import { create } from "zustand";
import { SummaryType } from "../api/api";

interface StoreState {
  summary: SummaryType | null;
  monthly: {
    flowrate: number[];
    pressure: number[];
    temperature: number[];
  };
  setSummary: (s: SummaryType) => void;
}

export const useEquipmentStore = create<StoreState>((set) => ({
  summary: null,
  monthly: {
    flowrate: Array(12).fill(0),
    pressure: Array(12).fill(0),
    temperature: Array(12).fill(0),
  },

  setSummary: (s) =>
    set({
      summary: s,
      monthly: {
        flowrate: s.monthly.flowrate,
        pressure: s.monthly.pressure,
        temperature: s.monthly.temperature,
      },
    }),
}));
