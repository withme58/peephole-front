import axios from "axios";
//
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || process.env.REACT_APP_DEPLOY_URL,
});

// 요청 인터셉터를 추가하여 모든 요청에 토큰 포함
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      // 토큰이 없으면 /landing 페이지로 리디렉션
      window.location.href = "/";
    } else {
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
    }

    return Promise.reject(error);
  }
);

export default instance;
