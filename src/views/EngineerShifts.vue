<template>
  <h1>Shifts</h1>
  <div class="grid place-items-center h-screen h1 " v-if="Object.keys(service).length === 0">
    <h1>Seleccione Servicio Para Ver horas disponibles... 🙏</h1>
  </div>

  <div v-else>
    {{ shifts }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useShiftStore } from "../stores/shifts";
const { shifts } = storeToRefs(useShiftStore());
const { service } = storeToRefs(useServiceStore());

</script>
