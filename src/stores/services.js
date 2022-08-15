import { defineStore } from "pinia";
import { fetchAllServices, createService, deleteService } from "../api/api";

export const useServiceStore = defineStore({
  id: "services",
  state: () => ({
    services: [],
    error: null,
    service: {},
    message: "",
    selectedWeek: null,
  }),
  getters: {
    getServices: (state) => state.services,
    getService: (state) => state.service,
    getSelectedWeek: (state) => state.selectedWeek,
    getError: (state) => state.error,
  },
  actions: {
    async fetchAllServices() {
      try {
        const { data: { services } } = await fetchAllServices();
        this.services = services;
      } catch (e) {
        this.error = e;
      }
    },
    async createService(payload) {
      try {
        const { data } = await createService(payload);
        this.service = data;
      } catch (e) {
        this.error = e;
      }
    },

    setService(payload) {
      try {
        this.service = payload;
        this.selectedWeek = payload.current_week;
      } catch (e) {
        this.error = e;
      }
    },

    setSelectedWeek(week) {
      try {
        this.selectedWeek = week;
      } catch (e) {
        this.error = e;
      }
    },

    async deleteService(id) {
      try {
        const { data } = await deleteService(id);
        this.message = data;
      } catch (e) {
        this.error = e;
      }
    },
  },
});
