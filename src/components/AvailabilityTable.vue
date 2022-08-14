<script setup>
import { storeToRefs } from "pinia";
import { useAvailableHoursStore } from "../stores/available_hours";
import { useServiceStore } from "../stores/services";
const { fetchAvailableHours } = useAvailableHoursStore();
const { available_hours, error } = storeToRefs(useAvailableHoursStore());
const { service } = storeToRefs(useServiceStore());

fetchAvailableHours(service.id);
</script>
<template>
  <main>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="available_hours" v-for="available_hour in available_hours" :key="available_hour.id">
      <p>{{ available_hour.description }}</p>
    </p>
  </main>
</template>
