import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useModalToggle from "../../hooks/useModalToggle";

export default function SignupForm() {
  const navigate = useNavigate();
  const { showSuccenssModal, setShowSuccessModal } = useState(false); //회원가입 성공모달
  const { isModalOpen, openModal, closeModal, toggleModal } =
    useModalToggle(false); //회원가입 실패 모달
}
