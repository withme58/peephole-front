// AddFriendModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";

export default function AddFriendModal({ onClose, onAddFriend }) {
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

  const handleAdd = () => {
    if (nickname.trim()) {
      onAddFriend(nickname);
      onClose();
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>친구 추가</h2>
        <input
          placeholder="닉네임 입력"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button onClick={onSubmit}>요청 보내기</button>
      </ModalContent>
    </ModalOverlay>
  );
}

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
  height: 150px;
  border-radius: 8px;
  text-align: center;

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: calc(100% - 16px);
    box-sizing: border-box;
  }

  button {
    padding: 8px 16px;
    cursor: pointer;
  }
`;
