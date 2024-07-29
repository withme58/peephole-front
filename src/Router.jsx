import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import MainPage from "./pages/Main/MainPage";
import LibraryPage from "./pages/Library/LibraryPage";
import FriendListPage from "./pages/FriendList/FriendListPage";
import ReplyQuestionPage from "./pages/ReplyQuestion/ReplyQuestionPage";
import InterviewPage from "./pages/Main/InterviewPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="list" element={<FriendListPage />} />
      <Route path="/reply" element={<ReplyQuestionPage />} />
    </Routes>
  );
}
