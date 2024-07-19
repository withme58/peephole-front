import styled from "styled-components";

export default function SendQuestionModal() {
  return (
    <ModalContainer>
      <FriendListHeader>친구 목록</FriendListHeader>
      <FriendList>
        <FriendItem>
          <FriendItemName>김철수</FriendItemName>
          <FriendItemButton>질문 보내기</FriendItemButton>
        </FriendItem>
        <FriendItem>
          <FriendItemName>김영희</FriendItemName>
          <FriendItemButton>질문 보내기</FriendItemButton>
        </FriendItem>
        <FriendItem>
          <FriendItemName>박민수</FriendItemName>
          <FriendItemButton>질문 보내기</FriendItemButton>
        </FriendItem>
      </FriendList>
    </ModalContainer>
  );
}

const ModalContainer = styled.div``;
const FriendList = styled.div``;
const FriendListHeader = styled.div``;
const FriendItem = styled.div``;
const FriendItemName = styled.div``;
const FriendItemButton = styled.button``;
