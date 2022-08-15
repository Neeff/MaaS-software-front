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
    getHoursPerEngineer: (state) => {
      return state.shifts.reduce((acc, value) => {
        return {
          ...acc,
          [value?.shift?.engineer.name]:
            (acc[value?.shift?.engineer.name] || 0) + 1,
        };
      }, {});
    },
    getError: (state) => state.error,
  },
  actions: {
    async fetchAllShifts(payload, week) {
      try {
        const { data: { available_hours } } = await fetchAllShifts(payload, week);
        this.shifts = available_hours;
      } catch (e) {
        this.error = e;
      }
    },
  },
});
