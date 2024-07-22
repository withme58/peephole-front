import styled from "styled-components";
import { CiLocationArrow1 } from "react-icons/ci";

// 나중에 api로 받아올 데이터
const mockfriends = [
  { name: "김철수", id: 1 },
  { name: "김영희", id: 2 },
  { name: "박민수", id: 3 },
];

export default function SendQuestionModal() {
  return (
    <Background>
      <ModalContainer>
        <FriendListHeader>친구 목록</FriendListHeader>
        <FriendList>
          {mockfriends.map((mockfriends) => (
            <FriendItem key={mockfriends.id}>
              <FriendItemName>{mockfriends.name}</FriendItemName>
              <CiLocationArrow1 width={24} height={24} />
            </FriendItem>
          ))}
        </FriendList>
      </ModalContainer>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div``;
const FriendList = styled.div``;
const FriendListHeader = styled.div``;
const FriendItem = styled.div``;
const FriendItemName = styled.div``;
