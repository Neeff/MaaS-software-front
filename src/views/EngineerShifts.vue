<template>
  <template v-if="Object.keys(service).length === 0">
    <a-empty
      description="Seleccione servicio para ver turnos asignados... 🙏"
    />
  </template>

  <div v-else>
    <h1 style="margin-left: 100px">{{ service.company_name }}</h1>
    <AssignedShifts />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useShiftStore } from "../stores/shifts";
import AssignedShifts from "../components/AssignedShifts.vue";
const { service, selectedWeek } = storeToRefs(useServiceStore());
const { fetchAllShifts } = useShiftStore();
if (service.value && service.value.id) {
  fetchAllShifts(service.value.id, selectedWeek.value);
}
</script>
