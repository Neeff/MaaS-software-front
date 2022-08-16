<script setup>
import { useServiceStore } from "../stores/services";
const { createService } = useServiceStore();
import { reactive } from "vue";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} este campo es requerido",
};
const formState = reactive({
  company: {
    company_name: "",
    engineer_one: "",
    engineer_two: "",
    engineer_three: "",
  },
});

const onFinish = (values) => {
  const payload = {};
  const engineers_attributes = [];
  for (const [key, value] of Object.entries(values.company)) {
    if (key !== "company_name") {
      const engineer = { name: value };
      engineers_attributes.push(engineer);
    } else {
      payload[key] = value;
    }
  }
  payload["engineers_attributes"] = engineers_attributes;
  createService(payload);
};
</script>
<template>
  <a-row :gutter="[24, 24]" flex justify="center" aling="middle" style="margin-top: 200px">
    <a-col :span="6">
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item
          :name="['company', 'company_name']"
          label="Nombre Compania"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.company.company_name" />
        </a-form-item>
        <a-form-item
          :name="['company', 'engineer_one']"
          label="Ingeniero 1:"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.company.engineer_one" />
        </a-form-item>
        <a-form-item
          :name="['company', 'engineer_two']"
          label="Ingeniero 2:"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.company.engineer_two" />
        </a-form-item>
        <a-form-item
          :name="['company', 'engineer_three']"
          label="Ingeniero 3:"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.company.engineer_three" />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button type="primary" html-type="submit">Crear Compania</a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
