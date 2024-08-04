import { ACCESS_TOKEN } from "../../constants/token";
import getCookie from "../cookie/getCookie";

export default function getAccessToken() {
  try {
    const accessToken = getCookie(ACCESS_TOKEN);

    if (accessToken) {
      return accessToken;
    }
    return null;
  } catch (error) {
    console.error("Error retrieving access token from cookies:", error);
    return null;
  }
}
