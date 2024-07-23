import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from "../../components/Signup/InputField";
import { useNavigate } from "react-router-dom";
// import SignupButton from '../../components/Signup/SignupButton';
import { IoIosArrowRoundBack } from "react-icons/io";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 모든 입력 필드에 값이 있을 때 버튼 활성화
    if (email && nickname && password && repassword) {
      setIsButtonActive(true);
      // console.log("성공")
    } else {
      setIsButtonActive(false);
      //console.log("실패")
    }
  }, [email, nickname, password, repassword]);

  return (
    <PageContainer>
      <Title>
        <IoIosArrowRoundBack
          size={28}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />{" "}
        회원가입
      </Title>
      <BodyContainer>
        <InputField
          type="text"
          labelData="이메일"
          value={email}
          onHandlerChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해 주세요"
        />
        <InputField
          type="text"
          labelData="닉네임"
          value={nickname}
          onHandlerChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해 주세요"
        />
        <InputField
          type="password"
          labelData="비밀번호"
          value={password}
          onHandlerChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
        />
        <InputField
          type="password"
          labelData="비밀번호 확인"
          value={repassword}
          onHandlerChange={(e) => setRePassword(e.target.value)}
          placeholder="비밀번호를 다시 입력해 주세요"
        />
      </BodyContainer>

      {/* <StyledSignupButton isActive={isButtonActive} /> */}
      <StyledSignupButton isActive={isButtonActive}>
        회원가입
      </StyledSignupButton>
      <FootContainer>
        이미 회원이신가요? <StyledLink href="/login">로그인</StyledLink>
      </FootContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  width: 388px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 44px auto 0;
  line-height: 34px;
  font-size: 20px;
  font-weight: bold;

  svg {
    position: absolute;
    left: 32px;
    color: var(--Grayscale-40);
  }
`;

const BodyContainer = styled.div`
  width: 326px;
  height: 420px;
  margin: 55px auto 0;
`;

const StyledSignupButton = styled.button`
  background: ${(props) => (props.isActive ? "#ff6600" : "#a5a5a5")};
  border: none;
  border-radius: 16px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.025em;
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};

  position: absolute;
  width: 326px;
  height: 60px;
  left: 32px;
  top: 652px;
`;

const FootContainer = styled.div`
  position: absolute;
  width: 326px;
  height: 0px;
  left: 32px;
  top: 791px;
  text-align: center;
  color: #979797;
`;

const StyledLink = styled.a`
  color: #ff6600;
  text-decoration: underline;
  cursor: pointer;
`;
