
import axios from "axios";
import { API_URL } from "./const";

export const axiosClassic = axios.create({
  baseURL:API_URL
})