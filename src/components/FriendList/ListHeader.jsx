import React, { useState } from "react";
import styled from "styled-components";
import AddFriendModal from "./AddFriendModal";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import InvitationConfirmationModal from "./InvitationConfirmationModal";

export default function ListHeader() {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState(null);
  const [invitations, setInvitations] = useState(["영창", "단비", "민교"]); // 이부분 백엔드에서 받아와야함

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const addFriend = (nickname) => {
    setFriends((prevFriends) => [...prevFriends, nickname]);
  };

  const openInvitationModal = () => {
    setIsInvitationModalOpen(true);
  };

  const closeInvitationModal = () => {
    setIsInvitationModalOpen(false);
  };

  const acceptInvitation = (name) => {
    addFriend(name);
    setInvitations((prevInvitations) =>
      prevInvitations.filter((invite) => invite !== name)
    );
  };
  const declineInvitation = (name) => {
    setInvitations((prevInvitations) =>
      prevInvitations.filter((invite) => invite !== name)
    );
  };

  return (
    <>
      <AddButton onClick={openAddModal}>친구 추가</AddButton>
      <InvitationButton onClick={openInvitationModal}>
        초대 확인
      </InvitationButton>
      {isAddModalOpen && (
        <AddFriendModal onClose={closeAddModal} onAddFriend={addFriend} />
      )}
      {isInvitationModalOpen && (
        <InvitationConfirmationModal
          invitations={invitations}
          onAccept={acceptInvitation}
          onDecline={declineInvitation}
          onClose={closeInvitationModal}
        />
      )}
    </>
  );
}

const AddButton = styled.button`
  top: 30px;
  left: 55%;
  position: absolute;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

const InvitationButton = styled.button`
  // 초대확인 버튼 스타일링
  top: 30px;
  left: 60%;
  position: absolute;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
