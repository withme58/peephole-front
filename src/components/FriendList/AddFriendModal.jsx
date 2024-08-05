// AddFriendModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { IoClose } from "react-icons/io5";

export default function AddFriendModal({ onClose }) {
  const [nickname, setNickname] = useState("");

  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/member/friend/request", {
        name: nickname,
      });
      console.log("addFriend response:", response.data.body); // 응답 데이터
      onClose();
    } catch (error) {
      console.error("친구추가 데이터 로드 실패:", error);
      if (error.response) {
        // 서버에서 응답이 반환된 경우
        console.error("서버 에러:", error.response.status);
        console.error("응답 데이터:", error.response.data);
      } else if (error.request) {
        // 요청이 만들어졌으나 서버에서 응답이 없었음
        console.error("서버 응답 없음:", error.request);
      } else {
        // 요청을 만들기 전에 발생한 문제
        console.error("요청 에러:", error.message);
      }
      onClose();
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Header>
          <QuestionHeader>친구 추가</QuestionHeader>
          <CloseButton>
            <IoClose onClick={onClose} size={25} color="#5a786f" />
          </CloseButton>
        </Header>
        <Input
          placeholder="닉네임 입력"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <SendButton type="button" onClick={onSubmit}>
          보내기
        </SendButton>
      </ModalContent>
    </ModalOverlay>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  svg {
    position: absolute;
    right: -90px;
    top: -5px;
  }
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

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  // background-color: var(--light-gray);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  height: 200px;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const SendButton = styled.button`
  width: 50px;
  height: 30px;
  font-size: 12px;
  display: flex;
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
