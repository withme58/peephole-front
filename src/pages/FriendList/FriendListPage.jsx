import React from "react";
import styled from "styled-components";
import ListForm from "../../components/FriendList/ListForm";

export default function FriendListPage() {
  return (
    <PageContainer>
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
`;
