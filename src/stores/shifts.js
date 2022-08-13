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
    async fetchAllShifts ({ commit }, payload) {
      try {
        const { data } = fetchAllShifts(payload);
        commit("SET_SHIFTS", data);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
  },
  mutations: {
    SET_SHIFTS(state, shifts) {
      state.shifts = shifts;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
});
