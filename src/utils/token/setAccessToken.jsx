import { ACCESS_TOKEN } from "../../constants/token";
import setCookie from "../cookie/setCookie";

export default function setAccessToken(accessToken) {
  if (accessToken) {
    try {
      const options = {
        maxAge: 60 * 60 * 24 * 7, //7일
        secure: true, //HTTPS 에서만 사용
        sameSite: "Strict", //SameSite 속성
      };
      setCookie(ACCESS_TOKEN, accessToken, options);
    } catch (error) {
      console.error("Error setting access token in cookies:", error);
      throw new Error("Failed to set access token in cookies");
    }
    return;
  }
  throw new Error("accessToken is not provided");
}
