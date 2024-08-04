import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// 요청 인터셉터를 추가하여 모든 요청에 토큰 포함
instance.interceptors.request.use(
  (config) => {
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

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 400) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // 로그아웃 처리 등 추가 작업 수행 가능
    }

    return Promise.reject(error);
  }
);

export default instance;
