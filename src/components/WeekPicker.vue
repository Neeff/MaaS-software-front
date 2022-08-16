<script setup>
import dayjs from "dayjs";
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useAvailableHoursStore } from "../stores/available_hours";
import { useShiftStore } from "../stores/shifts";
const currentDate = dayjs(new Date());
const year = currentDate.year();
const { service, selectedWeek } = storeToRefs(
  useServiceStore()
);
const { setSelectedWeek } = useServiceStore();
const { fetchAvailableHours } = useAvailableHoursStore();
const { fetchAllShifts } = useShiftStore();
const changeWeek = (service, week) => {
  setSelectedWeek(week);
  fetchAvailableHours(service, week);
  fetchAllShifts(service, week);
};
</script>

<template>
  <a-dropdown>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="week in service.weeks"
          :key="week"
          @click="changeWeek(service.id, week)"
        >
          {{ week }}
        </a-menu-item>
      </a-menu>
    </template>
    <a-button>
      {{ `${selectedWeek} de ${year}` }}
    </a-button>
  </a-dropdown>
</template>
