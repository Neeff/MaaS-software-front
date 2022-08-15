import { defineStore } from "pinia";
import _ from "lodash";
import { fetchAvailableHours, updateEngineerAvailableHour } from "../api/api";

export const useAvailableHoursStore = defineStore({
  id: "available_hours",
  state: () => ({
    availableHours: [],
    error: null,
    loading: false,
    updatedAvailableHour: [],
    engineerAvailableHoursToUpdate: [],
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
    async updateEngineerAvailableHour(service) {
      try {
        const payload = this.engineerAvailableHoursToUpdate;
        const { data: { available_hours } } = await updateEngineerAvailableHour(service, payload);
        this.updatedAvailableHour = available_hours;
        this.fetchAvailableHours(service);
        this.engineerAvailableHoursToUpdate = [];
      } catch (e) {
        this.error = e;
      }
    },
    setLoading() {
      this.loading = true;
    },
    pushToAvailableHoursToUpdate(payload) {
      const {
        available_hour: { engineer_id, available_hour_id, active },
      } = payload;
      try {
        this.engineerAvailableHoursToUpdate.push(payload);
        _.remove(
          this.engineerAvailableHoursToUpdate,
          (element) =>
            element.available_hour.engineer_id === engineer_id &&
            element.available_hour.available_hour_id === available_hour_id &&
            element.available_hour.active !== active
        );
      } catch (e) {
        this.error = e;
      }
    },
  },
});
