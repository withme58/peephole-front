import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";

export default function InvitationConfirmationModal({
  onAccept,
  onDecline,
  onClose,
}) {
  const [invitations, setInvitations] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/member/friend/waiting");
      console.log("Friend List response:", response.data.body); // 응답 데이터
      setInvitations(response.data.body.friendResponseList);
    } catch (error) {
      console.error("대기 친구 데이터 로드 실패:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>초대 목록</Title>
        <InvitationList>
          {invitations.map((invite) => (
            <InvitationItem key={invite.id}>
              <span>{invite.name}</span> {/* 여기서 invite.name을 렌더링 */}
              <ButtonGroup>
                <button onClick={() => onAccept(invite.name)}>수락</button>
                <button onClick={() => onDecline(invite.name)}>거절</button>
              </ButtonGroup>
            </InvitationItem>
          ))}
        </InvitationList>
        <CloseButton onClick={onClose}>닫기</CloseButton>
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
  border-radius: 8px;
  text-align: center;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 100000;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const InvitationList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const InvitationItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 5px 10px;
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  margin-top: auto;
  padding: 5px 10px;
  cursor: pointer;
`;
