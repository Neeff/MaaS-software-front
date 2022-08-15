import { defineStore } from "pinia";
import _ from "lodash";
import { fetchAllShifts } from "../api/api";

export const useShiftStore = defineStore({
  id: "shift",
  state: () => ({
    shifts: [],
    error: null,
  }),
  getters: {
    getShifts: (state) => {
      return _.chain(state.shifts)
        .groupBy("date")
        .map((value, key) => ({ date: key, hours: value }))
        .value();
    },
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
