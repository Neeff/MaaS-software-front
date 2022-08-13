import axios from "axios";
const baseUrl = "http://localhost:3000/";

export const fetchAllServices = async () => {
  return await axios.get(`${baseUrl}services`);
};

export const createService = async (payload) => {
  return await axios.post(`${baseUrl}services`, payload);
};

export const deleteService = async (id) => {
  return await axios.delete(`${baseUrl}services/${id}`);
};

export const fetchAvailableHours = async (payload) => {
  return await axios.post(`${baseUrl}available_hours`, payload);
};

export const updateEngineerAvailableHour = async (payload) => {
  return await axios.patch(`${baseUrl}available_hours/${payload.id}`, payload);
};

export const fetchAllShifts = async (payload) => {
  return await axios.post(`${baseUrl}shifts`, payload);
};

export const updateShift = async (payload) => {
  return await axios.post(`${baseUrl}shifts/${payload.id}`, payload);
};
