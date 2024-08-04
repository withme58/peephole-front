import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// 요청 인터셉터를 추가하여 모든 요청에 토큰 포함
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

// 응답 인터셉터를 추가하여 액세스 토큰 만료 시 로컬스토리지에서 토큰 삭제
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 401 에러일 경우 액세스 토큰 삭제
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export default instance;
