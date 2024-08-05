import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";

export default function InvitationConfirmationModal() {
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
    <InvitationList>
      {invitations.length === 0 ? <Text>텅~</Text> : null}
      {invitations.map((invite) => (
        <InvitationItem key={invite.id}>
          <Profile
            src={`${process.env.PUBLIC_URL}/images/profile.png`}
            alt="logo"
          />
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
  );
}
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #8e8e8e;
  font-size: 20px;
`;
const Profile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  z-index: 1000;
`;

/* 스타일 컴포넌트로 스크롤바 커스터마이징 */
const InvitationList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 700px;
  border-radius: 20px;
  background-color: #f3f3f330;
  margin: 20px 0px;
  padding: 10px;
  overflow-y: auto; /* Enable vertical scrolling */

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바의 색상 */
    border-radius: 5px; /* 스크롤바의 둥근 모서리 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바에 마우스를 올렸을 때 색상 */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 트랙의 색상 */
    border-radius: 5px; /* 스크롤바 트랙의 둥근 모서리 */
  }
`;

const InvitationItem = styled.div`
  display: flex;
  font-size: 25px;
  width: 370px;
  padding: 20px;
  color: #fff;
  border-bottom: 1px solid #fff;
  align-items: center;
  justify-content: space-between; /* Ensure the button group is on the right */

  span {
    flex-grow: 1; /* Ensure the span takes up all available space */
  }
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
