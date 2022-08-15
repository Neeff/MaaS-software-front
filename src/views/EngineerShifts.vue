<template>
  <template v-if="Object.keys(service).length === 0">
    <a-empty
      description="Seleccione servicio para ver turnos asignados... 🙏"
    />
  </template>

  <div v-else>
    <AssignedShifts />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import AssignedShifts from "../components/AssignedShifts.vue";
const { service } = storeToRefs(useServiceStore());
</script>
