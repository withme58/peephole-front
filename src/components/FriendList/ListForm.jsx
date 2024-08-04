import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import AddFriendModal from "./AddFriendModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import InvitationConfirmationModal from "./InvitationConfirmationModal";
import axios from "../../api/axios";

export default function ListForm() {
  const [friends, setFriends] = useState(["민교", "동호", "다현"]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/member/friends");
      console.log("Friend List response:", response.data.body); // 응답 데이터
      setFriends(response.data.body.friendResponseList);
    } catch (error) {
      console.error("친구 리스트 데이터 로드 실패:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openDeleteModal = (id) => {
    setFriendToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setFriendToDelete(null);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/member/friend/delete?friendId=${friendToDelete}`
      );
      console.log("Friend 삭제 response:", response.data.body); // 응답 데이터
      fetchData();
    } catch (error) {
      console.error("친구 리스트 삭제 로드 실패:", error);
    }
    closeDeleteModal();
  };

  return (
    <>
      <FriendBox>
        {friends.map((friend, index) => (
          <FriendList key={index}>
            <Profile
              src={`${process.env.PUBLIC_URL}/images/profile.png`}
              alt="logo"
            />
            <span>{friend.name}</span>
            <FaRegTrashAlt
              size={15}
              onClick={() => openDeleteModal(friend.id)}
            />
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

const Profile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 15px;
  z-index: 1000;
`;

const FriendBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 800px;
  border-radius: 20px;
  background-color: #f3f3f330;
  align-items: center;
`;

const FriendList = styled.div`
  display: flex;
  font-size: 25px;
  width: 380px;
  padding: 20px;
  color: #fff;
  border-bottom: 1px solid #fff;
  align-items: center;
  svg {
    cursor: pointer;
    position: absolute;
    right: 10%;
  }
`;
