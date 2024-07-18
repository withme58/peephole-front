import { ACCESS_TOKEN } from "../../constants/token";

export default function getAccessToken(accessToken) {
  if (accessToken) {
    setCookie(ACCESS_TOKEN, accessToken);
    return;
  }

  throw new Error("accessToken is not provided");
}
