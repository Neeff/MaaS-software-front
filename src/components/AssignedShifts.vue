<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";
import { useShiftStore } from "../stores/shifts";
import HoursPerEngineer from "./HoursPerEngineer.vue";
import WeekPicker from "./WeekPicker.vue";
const { getShifts } = storeToRefs(useShiftStore());

const formatDay = (day) => {
  const { date } = day;
  dayjs.extend(localizedFormat);
  return dayjs(date).format("ll");
}

const presenceOfShift = (hour) => {
  if (hour && hour.shift) return true;
  else return false;
};
</script>
<template>
<br />
  <a-button
    class="button"
    type="primary"
    @click="this.$router.push({ name: 'availablehours' })"
    >Editar Disponibilidad</a-button
  >  |
  <WeekPicker />
  <HoursPerEngineer />

  <a-row :gutter="[8, 8]" style="margin-left: 100px">
    <a-col :span="6" v-for="day in getShifts" :key="day.date +'1'">
      <a-card style="width: 300px" :title="formatDay(day)" hoverable>
        <p v-for="hour in day.hours" :key="hour.id">
          <a-tag :color="presenceOfShift(hour) ? 'green' : 'red'">
            {{ hour.description }}:
          </a-tag>
          <a-tag
            v-if="presenceOfShift(hour)"
            :color="hour.shift?.engineer?.color"
          >
            {{ hour.shift.engineer.name }}</a-tag
          >
          <ExclamationCircleOutlined v-else :style="{ color: 'red' }"/>
        </p>
      </a-card>
    </a-col>
  </a-row>
</template>

<style>
.button {
  margin-left: 100px;
  margin-bottom: 30px;
}
</style>
