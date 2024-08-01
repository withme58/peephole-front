import React from "react";
import styled from "styled-components";
import ListForm from "../../components/FriendList/ListForm";
import ListHeader from "../../components/FriendList/ListHeader";
import Header from "../../components/Molcules/Header";

export default function FriendListPage() {
  return (
    <PageContainer>
      <Header text={"친구 목록"} />
      <ListHeader />
      <ListForm />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
