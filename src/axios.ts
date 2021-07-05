import axios from "axios";

export const listApi = axios.create({
  baseURL: "http://localhost:3000/list",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
