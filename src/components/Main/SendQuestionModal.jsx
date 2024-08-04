import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import axios from "../../api/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SendQuestionModal({
  closeModal,
  userData = [],
  questionId,
}) {
  const navigate = useNavigate();
  const { handleSubmit, setValue } = useForm();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState(""); // 추가된 부분

  const onClickBackground = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onSubmit = async (data) => {
    const questionData = {
      questionId: questionId,
      friendName: data.friendName,
    };
    try {
      const response = await axios.post("/api/myfriends", questionData);
      console.log("SendQuestion response:", response);
      if (response.status === 200) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error("SendQuestion 데이터 전송 실패:", error);
      setShowFailModal(true);
    }
  };

  const handleSendClick = (user) => {
    setValue("friendName", user.name);
    setSelectedUserName(user.name); // 추가된 부분
    handleSubmit(onSubmit)();
  };

  return (
    <Background onClick={onClickBackground}>
      <ModalContainer>
        {showSuccessModal && (
          <SuccessModal
            closeModal={() => navigate("/")}
            userName={selectedUserName} // 추가된 부분
          />
        )}
        {showFailModal && (
          <FailModal closeModal={() => setShowFailModal(false)} />
        )}
        <Header>
          <QuestionHeader>피폴 목록</QuestionHeader>
          <CloseButton>
            <IoClose onClick={closeModal} size={25} color="#5a786f" />
          </CloseButton>
        </Header>
        <QuestionForm>
          {userData.map((user) => (
            <FriendItem key={user.id}>
              <FriendItemName>{user.name}</FriendItemName>
              <SendButton type="button" onClick={() => handleSendClick(user)}>
                보내기
              </SendButton>
            </FriendItem>
          ))}
        </QuestionForm>
      </ModalContainer>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 360px;
  max-width: 90%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionHeader = styled.div`
  flex-grow: 1;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #535353;
  margin: 0;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const QuestionForm = styled.div`
  margin-top: 20px;
  padding-right: 10px;
  height: 250px;
  overflow-y: scroll;
`;

const FriendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: var(--light-gray);
  }
`;

const FriendItemName = styled.span`
  font-size: 14px;
`;

const SendButton = styled.button`
  width: 50px;
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray);
  color: var(--deep-gray);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-blue);
    color: #fff;
  }
`;
