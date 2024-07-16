import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { PiExclamationMarkBold } from "react-icons/pi";
import { FaCircleExclamation } from "react-icons/fa6";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isLogined, setIsLogined] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isLoginFormValid = email !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogined === true) {
    } else {
      setLoginFail(true);
    }
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <Label isFocused={focusedField === "email" && email.length >= 0}>
          이메일
        </Label>
        <LabelDiv isFocused={focusedField === "email" && email.length >= 0}>
          <FaEnvelope size={24} />
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
          />
        </LabelDiv>
        <Label
          isFocused={focusedField === "password" && password.length >= 0}
          loginFail={loginFail}
        >
          비밀번호
        </Label>
        <LabelDiv
          isFocused={focusedField === "password" && password.length >= 0}
          loginFail={loginFail}
        >
          <FaLock size={24} />
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
            loginFail={loginFail}
          />
          <ToggleVisibilityIcon
            onClick={togglePasswordVisibility}
            passwordVisible={passwordVisible}
            loginFail={loginFail}
          >
            {passwordVisible ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
          </ToggleVisibilityIcon>
        </LabelDiv>
        {loginFail ? (
          <ErrorDiv>
            <FaCircleExclamation /> 야 비번 틀렸다
          </ErrorDiv>
        ) : (
          <div></div>
        )}

        <Button
          type="submit"
          disabled={!isLoginFormValid}
          isLoginFormValid={isLoginFormValid}
          loginFail={loginFail}
        >
          로그인
        </Button>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin: 55px 32px 0px 32px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: ${(props) =>
    props.loginFail
      ? "var(--Red-10)"
      : props.isFocused
      ? "var(--Orange-10)"
      : "var(--Grayscale-40)"};
  margin: 40px 0px 0px 0px;
`;

const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 0px;
  position: relative;

  svg {
    position: absolute;
    left: 20px;
    color: ${(props) =>
      props.loginFail
        ? "var(--Red-10)"
        : props.isFocused
        ? "var(--Orange-10)"
        : "var(--Grayscale-50)"};
  }
`;

const Input = styled.input`
  width: 326px;
  height: 60px;
  padding: 0px 0px 0px 50px;
  border: ${(props) =>
    props.isFocused ? "2px solid var(--Orange-10)" : "0px"};
  border-radius: 16px;
  background-color: ${(props) =>
    props.isFocused ? "var(--Grayscale-10)" : "var(--Grayscale-20)"};
  font-size: 14px;

  &:focus {
    border: 2px solid var(--Orange-10);
    background-color: var(--Grayscale-10);
  }

  ${(props) =>
    props.loginFail &&
    css`
      background-color: var(--Red-20);
      border: 2px solid var(--Red-10);
    `}
`;

const ToggleVisibilityIcon = styled.div`
  position: absolute;
  right: 76px;
  margin-top: -30px;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.loginFail
        ? "var(--Red-10)"
        : props.passwordVisible
        ? "var(--Orange-10)"
        : "var(--Grayscale-50)"};
  }
`;

const Button = styled.button`
  background-color: var(--Grayscale-30);
  color: var(--Grayscale-10);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  margin: 77px 0px 20px 0px;
  height: 60px;
  width: 326px;
  font-size: 16px;

  ${(props) =>
    props.isLoginFormValid &&
    css`
      background-color: var(--Orange-10);
    `}

  ${(props) =>
    props.loginFail &&
    css`
      background-color: var(--Orange-20);
    `}

    &:hover {
    background-color: var(--Orange-20);
  }
`;

const ErrorDiv = styled.div`
  margin: 5px 0px 0px 0px;
  font-size: 14px;
  color: var(--Red-10);
`;
