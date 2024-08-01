import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        id: "",
        name: "",
        email: "",
        createdAt: "", //~~일째 디자인을 위해..?
        status: "",
      },
      setUser: (userInfo) => set({ user: userInfo }),
    }),
    {
      name: "user-storage", //localstorage에 저장할때 사용될 키
      getStorage: () => localStorage, //사용하 스토리지 지정
    }
  )
);

export default useUserStore;
