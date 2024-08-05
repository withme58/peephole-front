import React, { useState } from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddFriendModal from "./AddFriendModal";

export default function FriendListHeader({ text }) {
  const navigate = useNavigate();
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);
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
      <HeaderContainer>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoArrowBack size={24} color="white" />
        </BackButton>
        <HeaderBox>{text}</HeaderBox>
        <MagnifyButton onClick={openAddModal}>
          <FaMagnifyingGlass size={24} color="white" />
        </MagnifyButton>
      </HeaderContainer>
      {isAddModalOpen && (
        <AddFriendModal onClose={closeAddModal} onAddFriend={addFriend} />
      )}
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0;
  position: relative;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  font-size: 24px;
  width: 360px;
  height: 56px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

const MagnifyButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;
