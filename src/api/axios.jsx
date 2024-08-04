// axios 인스턴스 생성
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//요청 인터셉터를 추가하여 모든 요청에 토큰 포함
instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["authorization-token"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
