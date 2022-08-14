<template>
  <ul class="flex border-b">
    <li class="-mb-px mr-1">
      <div class="dropdown">
        <button
          class="dropdonw bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        >
          <span class="mr-1">Servicios</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li v-for="service in services" :key="service.id">
              <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="getDataByService(service)">{{service.company_name}}</a>
          </li>
          <!-- <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
          <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
          <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li> -->
        </ul>
      </div>
    </li>
    <li class="mr-1">
      <router-link
        class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        to="/available_hours"
        >Horas Disponibles</router-link
      >
    </li>
    <li class="mr-1">
      <router-link
        class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        to="/shifts"
        >Turnos</router-link
      >
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/services";
import { useAvailableHoursStore } from "../stores/available_hours";
import { useShiftStore } from "../stores/shifts";
const { services } = storeToRefs(useServiceStore());

const { fetchAllServices, setService } = useServiceStore();
const { fetchAvailableHours } = useAvailableHoursStore();
const { fetchAllShifts } = useShiftStore();
const getDataByService = (service) => {
  setService(service);
  fetchAvailableHours(service.id);
  fetchAllShifts(service.id);

}

fetchAllServices();
</script>

<style>
  .dropdown:hover .dropdown-menu {
  display: block;
}
</style>