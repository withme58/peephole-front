// axios 인스턴스 생성
import axios from "axios";

//임의생성
const instance = axios.create({
  baseURL: "http://localhost:8080",
});

//요청 인터셉터를 추가하여 모든 요청에 토큰 포함
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("login");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
