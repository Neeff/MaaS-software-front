import { defineStore } from "pinia";
import { fetchAllShifts } from "../api/api";

export const useShiftStore = defineStore({
  id: "shift",
  state: () => ({
    shifts: [],
    error: null,
  }),
  getter: {
    getShifts: (state) => state.shifts,
    getError: (state) => state.error,
  },
  actions: {
    async fetchAllShifts(payload) {
      try {
        const { data: { available_hours } } = await fetchAllShifts(payload);
        this.shifts = available_hours;
      } catch (e) {
        this.error = e;
      }
    },
  },
});
