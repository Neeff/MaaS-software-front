<script setup>
import { storeToRefs } from "pinia";
import { useShiftStore } from "../stores/shifts";
const { getHoursPerEngineer } = storeToRefs(useShiftStore());
</script>

<template>
  <a-row :gutter="[24, 24]" style="margin-left: 100px">
    <a-col  style="margin-bottom: 30px" :span="6" v-for= "(hours, key) in getHoursPerEngineer" :key="key + hours">
      <a-statistic :title="key === 'undefined' ? 'Horas Sin Asignar' : key" :value="hours " style="margin-right: 50px" />
    </a-col>
  </a-row>
</template>

