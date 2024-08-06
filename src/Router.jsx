import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import MainPage from "./pages/Main/MainPage";
import LibraryPage from "./pages/Library/LibraryPage";
import FriendListPage from "./pages/FriendList/FriendListPage";
import InterviewPage from "./pages/Main/InterviewPage";
import MyPage from "./pages/MyPage/MyPage";
import QuestionAll from "./pages/ReplyQuestion/QuestionAll";
import LandingPage from "./pages/Landing/LandingPage";
import QuestionOne from "./pages/ReplyQuestion/QuestionOne";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/peephole" element={<MainPage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/list" element={<FriendListPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/questionAll" element={<QuestionAll />} />
      <Route path="/questionOne" element={<QuestionOne />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
