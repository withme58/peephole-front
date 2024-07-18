import { ACCESS_TOKEN } from "../../constants/token";
import setCookie from "../cookie/setCookie";

export default function setAccessToken(accessToken) {
  if (accessToken) {
    setCookie(ACCESS_TOKEN, accessToken);
    return;
  }
  throw new Error("accessToken is not provided");
}
