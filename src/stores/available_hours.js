import { defineStore } from "pinia";
import { fetchAvailableHours, updateEngineerAvailableHour } from "../api/api";

export const useAvailableHoursStore = defineStore({
  id: "available_hours",
  state: () => ({
    availableHours: [],
    error: null,
    availableHour: {},
  }),
  getters: {
    getAvailableHours: (state) => state.availableHours,
    getError: (state) => state.error,
  },
  actions: {
    async fetchAvailableHours(payload) {
      try {
        const { data: { available_hours} } = await fetchAvailableHours(payload);
        this.availableHours = available_hours;
      } catch (e) {
        this.error = e;
      }
    },
    async updateEngineerAvailableHour(payload) {
      try {
        const { data: { availabel_hour} } = await updateEngineerAvailableHour(payload);
        this.availableHour = availabel_hour;
      } catch (e) {
        this.error = e;
      }
    },
  },
});
