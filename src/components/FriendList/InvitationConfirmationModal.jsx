import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";

export default function InvitationConfirmationModal({ onClose }) {
  const [invitations, setInvitations] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/member/friend/waiting");
      console.log("Friend List response:", response.data.body); // 응답 데이터
      setInvitations(response.data.body.friendResponseList);
    } catch (error) {
      console.error("대기 친구 데이터 로드 실패:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Accept invitation and refetch data
  const onAccept = async (id) => {
    try {
      await axios.get(`/api/member/friend/accept?friendId=${id}`);
      console.log("Friend accept response: Invitation accepted."); // Response data not used here
      await fetchData(); // Reload invitations
    } catch (error) {
      console.error("friend accept 에러 :", error);
    }
  };

  // Decline invitation and refetch data
  const onDecline = async (id) => {
    try {
      await axios.get(`/api/member/friend/reject?friendId=${id}`);
      console.log("Friend reject response: Invitation rejected."); // Response data not used here
      await fetchData(); // Reload invitations
    } catch (error) {
      console.error("friend reject 에러 :", error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Header>
          <QuestionHeader>초대 목록</QuestionHeader>
        </Header>
        <InvitationList>
          {invitations.map((invite) => (
            <InvitationItem key={invite.id}>
              <span>{invite.name}</span> {/* 여기서 invite.name을 렌더링 */}
              <ButtonGroup>
                <AcceptButton onClick={() => onAccept(invite.id)}>
                  수락
                </AcceptButton>
                <RejectButton onClick={() => onDecline(invite.id)}>
                  거절
                </RejectButton>
              </ButtonGroup>
            </InvitationItem>
          ))}
        </InvitationList>
        <SendButton onClick={onClose}>닫기</SendButton>
      </ModalContent>
    </ModalOverlay>
  );
}
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

const InvitationList = styled.div`
  flex: 1;
  margin: 20px 0px 20px 0px;
`;

const InvitationItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-left: 15px;
  font-size: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;

  button {
    padding: 5px 10px;
    cursor: pointer;
  }
`;

const AcceptButton = styled.button`
  padding: 10px 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--hover-blue);
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;

const RejectButton = styled.button`
  padding: 10px 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray);
  color: var(--deep-gray);
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const SendButton = styled.button`
  padding: 10px 10px;
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
