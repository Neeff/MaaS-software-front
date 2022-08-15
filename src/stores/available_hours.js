import { defineStore } from "pinia";
import _ from "lodash";
import { fetchAvailableHours, updateEngineerAvailableHour } from "../api/api";

export const useAvailableHoursStore = defineStore({
  id: "available_hours",
  state: () => ({
    availableHours: [],
    error: null,
    loading: false,
    availableHour: {},
  }),
  getters: {
    getAvailableHours: (state) => {
      return _.chain(state.availableHours)
        .groupBy("date")
        .map((value, key) => ({ date: key, hours: value }))
        .value();
    },
    getError: (state) => state.error,
  },
  actions: {
    async fetchAvailableHours(payload) {
      try {
        const { data: { available_hours } } = await fetchAvailableHours(payload);
        this.availableHours = available_hours;
      } catch (e) {
        this.error = e;
      }
    },
    async updateEngineerAvailableHour(payload) {
      try {
        const { data: { available_hour } } = await updateEngineerAvailableHour(payload);
        this.availableHour = available_hour;
      } catch (e) {
        this.error = e;
      }
    },
    setLoading() {
      this.loading = true;
    }
  },
});
