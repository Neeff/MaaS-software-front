<template>
  <a-menu mode="horizontal">
    <a-sub-menu key="sub1">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>Servicios</template>
      <a-menu-item-group title="Servicios">
        <a-menu-item :key="service.id" v-for="service in services" @click="getDataByService(service)">{{
          service.company_name
        }}</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-menu-item
      key="mail"
      @click="this.$router.push({ name: 'availablehours' })"
    >
      Horas Disponibles
    </a-menu-item>
    <a-menu-item
      key="app"
      @click="this.$router.push({ name: 'engineershifts' })"
    >
      Turnos
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useAvailableHoursStore } from "../stores/available_hours";
import { useShiftStore } from "../stores/shifts";
const { services } = storeToRefs(useServiceStore());

const { fetchAllServices, setService } = useServiceStore();
const { fetchAvailableHours } = useAvailableHoursStore();
const { fetchAllShifts } = useShiftStore();
const getDataByService = (service) => {
  setService(service);
  fetchAvailableHours(service.id);
  fetchAllShifts(service.id);
}

fetchAllServices();
</script>