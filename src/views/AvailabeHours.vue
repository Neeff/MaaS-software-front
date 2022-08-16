<template>
 <template v-if="Object.keys(service).length === 0">
    <a-empty
      description="Seleccione servicio para ver horas disponibles... 🙏"
    />
  </template>
  <template v-else>
    <h1 style="margin-left: 100px">{{ service.company_name }}</h1>
    <AvailabilityTable />
  </template>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import AvailabilityTable from "../components/AvailabilityTable.vue";
const { service } = storeToRefs(useServiceStore());
</script>
