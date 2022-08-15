import axios from "axios";
const baseUrl = "http://localhost:3000/";

export const fetchAllServices = async () => {
  return await axios.get(`${baseUrl}services`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const createService = async (payload) => {
  return await axios.post(`${baseUrl}services`, {
    headers: { "Content-Type": "application/json" },
    body: payload,
  });
};

export const deleteService = async (id) => {
  return await axios.delete(`${baseUrl}services/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const fetchAvailableHours = async (payload, week) => {
  return await axios.get(`${baseUrl}available_hours/${payload}/${week}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateEngineerAvailableHour = async (serviceId, payload, week) => {
  return await axios.patch(`${baseUrl}available_hours/${serviceId}`, {
    available_hours: payload,
    service_id: serviceId,
    week: week,
    headers: { "Content-Type": "application/json" },
  });
};

export const fetchAllShifts = async (payload, week) => {
  return await axios.get(`${baseUrl}shifts/${payload}/${week}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateShift = async (payload) => {
  return await axios.post(`${baseUrl}shifts/${payload.id}`, {
    body: payload,
    headers: { "Content-Type": "application/json" },
  });
};
