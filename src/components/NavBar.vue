<template>
  <ul class="flex border-b">
    <li class="-mb-px mr-1">
      <router-link
        class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        to="/services"
        >Servicios</router-link
      >
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

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
});
</script>
