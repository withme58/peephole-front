import React, { useState } from "react";
import styled from "styled-components";
import AddFriendModal from "./AddFriendModal";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import InvitationConfirmationModal from "./InvitationConfirmationModal";

export default function ListHeader({ selected, setSelected }) {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);

  const navigate = useNavigate();

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
    navigate("/list");
  };

  return (
    <>
      <Bar>
        <NavItem selected={selected === 0} onClick={() => setSelected(0)}>
          나의 피폴
        </NavItem>
        <NavItem selected={selected === 1} onClick={() => setSelected(1)}>
          받은 요청
        </NavItem>
      </Bar>
    </>
  );
}

const Bar = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.div`
  color: ${({ selected }) => (selected ? "#fff" : "#ACACAC")};
  font-size: 20px;
  padding: 15px 50px;
  font-weight: ${({ selected }) => (selected ? "bold" : "none")};
  border-bottom: ${({ selected }) =>
    selected ? "2px solid white" : "1px solid #acacac"};
  cursor: pointer;
`;
