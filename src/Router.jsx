import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import FriendListPage from "./pages/FriendList/FriendListPage";
import ReplyQuestionPage from "./pages/ReplyQuestion/ReplyQuestionPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="list" element={<FriendListPage />} />
      <Route path="/reply" element={<ReplyQuestionPage />} />
    </Routes>
  );
}
