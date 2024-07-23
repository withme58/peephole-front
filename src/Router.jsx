import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
