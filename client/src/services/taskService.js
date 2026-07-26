import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const token = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getTasks = () =>
  axios.get(`${API}/tasks`, token());

export const getTask = (id) =>
  axios.get(`${API}/tasks/${id}`, token());

export const createTask = (data) =>
  axios.post(`${API}/tasks`, data, token());

export const updateTask = (id, data) =>
  axios.put(`${API}/tasks/${id}`, data, token());

export const deleteTask = (id) =>
  axios.delete(`${API}/tasks/${id}`, token());