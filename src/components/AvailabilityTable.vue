<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useAvailableHoursStore } from "../stores/available_hours";
const { service, selectedWeek } = storeToRefs(useServiceStore());
const { getAvailableHours} = storeToRefs(useAvailableHoursStore());
const { updateEngineerAvailableHour, pushToAvailableHoursToUpdate } = useAvailableHoursStore();
const formatDay = (day) => {
  const { date } = day;
  dayjs.extend(localizedFormat);
  return dayjs(date).format("ll");
}

const check =  ({engineer_id, available_hour_id }, e) => {
  const checkboxValue = e.target.checked;
  const payload = { available_hour: { engineer_id, available_hour_id, active: checkboxValue } }
    pushToAvailableHoursToUpdate(payload);
};

</script>
<template>
<br/>
<a-button class="button" type="primary" @click="updateEngineerAvailableHour(service.id, selectedWeek)">Actualizar Disponibilidad</a-button>
  <a-row :gutter="[8, 8]" style="margin-left: 100px">
    <a-col :span="6" v-for="day in getAvailableHours" :key="day.date">
      <a-card style="width: 300px" :title="formatDay(day)" hoverable>
          <p v-for="hour in day.hours" :key="hour.id">
            {{ hour.description }}
            <p v-for="engineer in hour.engineer_available_hours" :key="engineer.engineer_id">{{engineer.name}}:
              <input type="checkbox" :checked="engineer.active" @change="check(engineer, $event, service)"></p>
            <a-divider style="height: 2px; background-color: #7cb305" />
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
