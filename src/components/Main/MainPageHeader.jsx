import styled from "styled-components";

export default function MainPageHeader() {
  return (
    <HeaderContainer>
      <LogoButton>핍홀</LogoButton>
      <MypageButton>마이페이지</MypageButton>
      <FriendListButon>친구 목록</FriendListButon>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div``;
const LogoButton = styled.button``;
const MypageButton = styled.button``;
const FriendListButon = styled.button``;
