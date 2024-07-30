import React, { useState } from "react";
import styled from "styled-components";
import AddFriendModal from "./AddFriendModal";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function ListHeader() {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const addFriend = (nickname) => {
    setFriends((prevFriends) => [...prevFriends, nickname]);
  };

  return (
    <>
      <Header>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoArrowBack size={24} color="white" />
        </BackButton>
        <LogoBox>친구 목록</LogoBox>
        <AddButton onClick={openAddModal}>친구 추가</AddButton>
      </Header>
      {isAddModalOpen && (
        <AddFriendModal onClose={closeAddModal} onAddFriend={addFriend} />
      )}
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
  position: relative;
  color: #fff;
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  font-size: 40px;
  height: 56px;
  font-weight: bold;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;

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

const BackButton = styled.div`
  display: flex;
  align-items: center;
`;
