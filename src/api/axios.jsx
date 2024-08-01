import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// 요청 인터셉터를 추가하여 모든 요청에 토큰 포함
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
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
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    if (error.response.status === 401 && refreshToken) {
      // 토큰 갱신 요청 되는진
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/refresh-token`,
          { token: refreshToken }
        );
        const newAccessToken = response.data.accessToken;

        // 새로운 액세스 토큰 저장
        localStorage.setItem("accessToken", newAccessToken);

        // 원래 요청에 새로운 액세스 토큰 설정
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // 원래 요청 재시도
        return axios(originalRequest);
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
        // 갱신 실패 시 로그아웃 처리 등 추가 작업 수행 가능
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
