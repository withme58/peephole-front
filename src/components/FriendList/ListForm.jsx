import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import AddFriendModal from "./AddFriendModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import InvitationConfirmationModal from "./InvitationConfirmationModal";
import axios from "../../api/axios";

export default function ListForm() {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState(null);
  const [invitations, setInvitations] = useState(["영창", "단비", "민교"]); // 이부분 백엔드에서 받아와야함

  const fetchData = async (data) => {
    try {
      const respnse = await axios.get("/member/friends");
      console.log("friendList response:", respnse); // 응답 데이터
    } catch (error) {
      console.error("친구목록 데이터 로드 실패:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
