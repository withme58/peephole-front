import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import ResponsModal from "./ResponseModal";

export default function AddFriendModal({ onClose }) {
  const [nickname, setNickname] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("전송을 실패했습니다.");

  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/member/friend/request", {
        name: nickname,
      });
      console.log("addFriend response:", response.data.body); // 응답 데이터 확인
      setModalText("전송되었습니다.");
      setIsOpen(true);
    } catch (error) {
      console.error("친구추가 데이터 로드 실패:", error);
      setIsOpen(true);
      if (error.response) {
        console.error("서버 에러:", error.response.status);
        console.error("응답 데이터:", error.response.data);
      } else if (error.request) {
        console.error("서버 응답 없음:", error.request);
      } else {
        console.error("요청 에러:", error.message);
      }
    }
    onClose();
  };

  useEffect(() => {
    console.log("isOpen changed:", isOpen); // 상태 변화 로그
  }, [isOpen]);

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <Header>
            <QuestionHeader>피폴 추가</QuestionHeader>
            <CloseButton onClick={onClose}>
              <IoClose size={30} color="#5a786f" />
            </CloseButton>
          </Header>
          <InputContainer>
            <Input
              placeholder="추가하기..."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <PlusIcon onClick={onSubmit} isActive={nickname.length > 1}>
              <FiPlus
                size={30}
                color={nickname.length > 1 ? "#42AACB" : "#acacac"}
              />
            </PlusIcon>
          </InputContainer>
        </ModalContent>
      </ModalOverlay>
      {isOpen && (
        <ResponsModal onClose={() => setIsOpen(false)} text={modalText} />
      )}
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const QuestionHeader = styled.div`
  flex-grow: 1;
  text-align: flex-start;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #535353;
  margin: 0;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: relative;
  right: -105px;
  top: -30px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 50px 10px 10px;
  font-size: 20px;
  border-bottom: 3px solid #acacac;
`;

const PlusIcon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#42AACB" : "#acacac")};
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
