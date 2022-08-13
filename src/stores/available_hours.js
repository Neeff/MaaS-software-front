import { defineStore } from "pinia";
import { fetchAvailableHours, updateEngineerAvailableHour } from "../api/api";

export const useAvailableHoursStore = defineStore({
  id: "available_hours",
  state: () => ({
    available_hours: [],
    error: null,
    available_hour: {},
  }),
  getters: {
    getAvailableHours: (state) => state.available_hours,
    getError: (state) => state.error,
  },
  actions: {
    async fetchAvailableHours({ commit }) {
      try {
        const { data } = fetchAvailableHours();
        commit("SET_AVAILABLE_HOURS", data);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
    async updateEngineerAvailableHour({ commit }, payload) {
      try {
        const { data } = updateEngineerAvailableHour(payload);
        commit("SET_AVAILABLE_HOUR", data);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
  },
  mutations: {
    SET_AVAILABLE_HOURS(state, available_hours) {
      state.available_hours = available_hours;
    },
    SET_AVAILABLE_HOUR(state, available_hour) {
      state.available_hour = available_hour;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
});
