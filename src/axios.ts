import axios from 'axios';

export const listApi = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});
