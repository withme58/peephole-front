import React from "react";
import styled from "styled-components";
import ListForm from "../../components/FriendList/ListForm";
import ListHeader from "../../components/FriendList/ListHeader";

export default function FriendListPage() {
  return (
    <PageContainer>
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
  height: 100vh;
`;
