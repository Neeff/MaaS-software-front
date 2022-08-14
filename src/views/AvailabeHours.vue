<template>
  <h1>AvailableHours</h1>
  <div class="grid place-items-center h-screen h1 " v-if="Object.keys(service).length === 0">
    <h1>Seleccione Servicio Para Ver horas disponibles... 🙏</h1>
  </div>

  <div v-else>
    {{ availableHours }}

  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useAvailableHoursStore } from "../stores/available_hours";
const { availableHours } = storeToRefs(useAvailableHoursStore());
const { service } = storeToRefs(useServiceStore());
</script>
