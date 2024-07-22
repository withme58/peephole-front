import styled from "styled-components";
import useToggle from "../../hooks/useToggle";

export default function MainPageHeader() {
  const [toggleModal, setToggleModal] = useToggle(false);

  return (
    <HeaderContainer>
      <LogoButton>핍홀</LogoButton>
      <MypageButton>마이페이지</MypageButton>
      <FriendListButon onClick={() => setToggleModal(true)}>
        친구 목록
      </FriendListButon>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div``;
const LogoButton = styled.button``;
const MypageButton = styled.button``;
const FriendListButon = styled.button``;
