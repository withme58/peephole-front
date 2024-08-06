import React, { useState } from "react";
import styled from "styled-components";
import ListForm from "../../components/FriendList/ListForm";
import ListHeader from "../../components/FriendList/ListHeader";
import Header from "../../components/Molcules/Header";
import InvitationConfirmationModal from "../../components/FriendList/InvitationConfirmationModal";
import FriendListHeader from "../../components/FriendList/FriendListHeader";

export default function FriendListPage() {
  const [selected, setSelected] = useState(0); // 0-> 나의 피폴, 1-> 받은 요청

  return (
    <PageContainer>
      <FriendListHeader text="친구 목록" />
      <ListHeader selected={selected} setSelected={setSelected} />
      {selected === 0 ? <ListForm /> : <InvitationConfirmationModal />}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  margin-bottom: 30px;
  height: 100vh;
`;
