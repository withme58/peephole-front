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
  width: 390px;
  height: 844px;
  position: relative;
`;
