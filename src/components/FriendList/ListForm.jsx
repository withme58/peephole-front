import React, { useState } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import AddFriendModal from "./AddFriendModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ListForm() {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState(null);

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
`;
// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   font-size: 20px;
//   height: 56px;
//   font-weight: bold;
//   background-color: #f9f9f9;
//   padding: 0 10px;
// `;

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
