<script setup>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useAvailableHoursStore } from "../stores/available_hours";
const { service } = storeToRefs(useServiceStore());
const { getAvailableHours, loading} = storeToRefs(useAvailableHoursStore());
const { updateEngineerAvailableHour, setLoading } = useAvailableHoursStore();
const formatDay = (day) => {
  const { date } = day;
  dayjs.extend(localizedFormat);
  return dayjs(date).format("ll");
}

const check =  ({engineer_id, available_hour_id }, e, updateEngineerAvailableHour, setLoading, service) => {
  const payload =  { service_id: service.id, id: available_hour_id, available_hour: { engineer_id, available_hour_id, active: e.target.checked }}
  console.log(payload);
  updateEngineerAvailableHour(payload);
  setLoading();
};

</script>
<template>
<!-- <template v-if="loading">
  <div class="example">
    <a-spin />
  </div>
</template> -->
  <a-row :gutter="[8, 8]">
    <a-col :span="6" v-for="day in getAvailableHours" :key="day.date">
      <a-card style="width: 300px" :title="formatDay(day)">
          <p v-for="hour in day.hours" :key="hour.id">
            {{ hour.description }}
            <p v-for="engineer in hour.engineer_available_hours" :key="engineer.engineer_id">{{engineer.name}}:
              <input type="checkbox" :checked="engineer.active" @change="check(engineer, $event, updateEngineerAvailableHour, setLoading, service)"></p>
            <a-divider style="height: 2px; background-color: #7cb305" />
          </p>
      </a-card>
    </a-col>
  </a-row>
</template>
