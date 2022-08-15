<template>
  <h1>AvailableHours</h1>
 <template v-if="Object.keys(service).length === 0">
    <a-empty
      description="Seleccione servicio para ver horas disponibles... 🙏"
    />
  </template>

  <AvailabilityTable />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import AvailabilityTable from "../components/AvailabilityTable.vue";
const { service } = storeToRefs(useServiceStore());
</script>
