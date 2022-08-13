import { defineStore } from "pinia";
import { fetchAllServices, createService, deleteService } from "../api/api";

export const useServiceStore = defineStore({
  id: "services",
  state: () => ({
    services: [],
    error: null,
    service: [],
    message: "",
  }),
  getters: {
    getServices: (state) => state.services,
    getError: (state) => state.error,
  },
  actions: {
    async fetchAllServices({ commit }) {
      try {
        const { data } = fetchAllServices();
        commit("SET_SERVICES", data);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
    async createService({ commit }, payload) {
      try {
        const { data } = createService(payload);
        commit("SET_SERVICE", data);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },

    async deleteService({ commit }, id) {
      try {
        const { data } = deleteService(id);
        commit("SET_MESSAGE", data);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },
});
