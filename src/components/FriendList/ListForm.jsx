import React, { useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import AddFriendModal from "./AddFriendModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import InvitationConfirmationModal from "./InvitationConfirmationModal";

export default function ListForm() {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState(null);
  const [invitations, setInvitations] = useState(["영창", "단비", "민교"]); // 이부분 백엔드에서 받아와야함

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openDeleteModal = (index) => {
    setFriendToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setFriendToDelete(null);
  };

  const confirmDelete = () => {
    setFriends((prevFriends) =>
      prevFriends.filter((_, index) => index !== friendToDelete)
    );
    closeDeleteModal();
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
      <Header>
        친구 목록
        <AddButton onClick={openAddModal}>친구 추가</AddButton>
        <InvitationButton onClick={openInvitationModal}>
          초대 확인
        </InvitationButton>
      </Header>
      <FriendBox>
        {friends.map((name, index) => (
          <FriendList key={index}>
            <span>{name}</span>
            <FaRegTrashAlt size={15} onClick={() => openDeleteModal(index)} />
          </FriendList>
        ))}
      </FriendBox>

      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          onConfirm={confirmDelete}
          onCancel={closeDeleteModal}
        />
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
const Form = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 20px;
  height: 56px;
  font-weight: bold;
  background-color: #f9f9f9;
  padding: 0 10px;
`;

const AddButton = styled.button`
  position: absolute;
  right: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

const InvitationButton = styled.button`
  // 초대확인 버튼 스타일링
  position: absolute;
  right: 120px; /* 적절한 위치 설정 */
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FriendBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
`;

const FriendList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  background-color: #ff9;
  margin: 5px;
  padding: 5px;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
