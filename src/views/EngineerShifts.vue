<template>
  <h1>Shifts</h1>

  <template v-if="Object.keys(service).length === 0">
    <a-empty
      description="Seleccione servicio para ver turnos asignados... 🙏"
    />
  </template>

  <div v-else>
    {{ getShifts }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useShiftStore } from "../stores/shifts";
const { getShifts } = storeToRefs(useShiftStore());
const { service } = storeToRefs(useServiceStore());

</script>
