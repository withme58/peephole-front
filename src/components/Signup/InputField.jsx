import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

export default function InputField({
  type,
  labelData,
  value,
  onHandlerChange,
  placeholder,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  let borderColor = "#ccc";
  let iconComponent = null;

  switch (placeholder) {
    case "이메일을 입력해 주세요":
      iconComponent = <FaEnvelope color={isFocused ? "#ff6600" : "#8E8E8E"} />;
      borderColor = isFocused ? "#ff6600" : "#ccc";
      break;
    case "닉네임을 입력해 주세요":
      iconComponent = <FaUser color={isFocused ? "#ff6600" : "#8E8E8E"} />;
      borderColor = isFocused ? "#ff6600" : "#ccc";

      break;
    case "비밀번호를 입력해 주세요":
    case "비밀번호를 다시 입력해 주세요":
      borderColor = isFocused ? "#ff6600" : "#ccc";
      iconComponent = <FaLock color={isFocused ? "#ff6600" : "#8E8E8E"} />;
      break;
    default:
      iconComponent = null;
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <Label isFocused={isFocused}>{labelData}</Label>
      {iconComponent && (
        <IconWrapper isFocused={isFocused}>{iconComponent}</IconWrapper>
      )}
      <StyledInput
        type={
          isPasswordVisible &&
          (placeholder === "비밀번호를 입력해 주세요" ||
            placeholder === "비밀번호를 다시 입력해 주세요")
            ? "text"
            : type
        }
        value={value}
        onChange={onHandlerChange}
        onClick={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        borderColor={borderColor}
        isFocused={isFocused}
      />
      {placeholder === "비밀번호를 입력해 주세요" && (
        <PasswordIconWrapper onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <FaEye color="#ff6600" /> : <FaEyeSlash />}
        </PasswordIconWrapper>
      )}
      {placeholder === "비밀번호를 다시 입력해 주세요" && (
        <PasswordIconWrapper onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <FaEye color="#ff6600" /> : <FaEyeSlash />}
        </PasswordIconWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 17px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  line-height: 22px;
  font-style: normal;
  font-weight: 550;
  font-size: 13px;
  color: ${(props) => (props.isFocused ? "#ff6600" : "#535353")};
  margin-bottom: 8px;
  margin-left: 8px;
`;

const StyledInput = styled.input`
  width: 320px;
  height: 60px;
  border-radius: 16px;
  border: 1px solid ${(props) => (props.isFocused ? "#ff6600" : "#fff")};
  background-color: ${(props) => (props.isFocused ? "#ffffff" : "#f3f3f3")};
  text-indent: 50px;
  line-height: 22px;
  font-size: 13.5px;
  outline: none;

  &:focus {
    background-color: #ffffff;
    border: 1px solid #ff6600;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 54px;
  font-size: 24;
  color: ${(props) => (props.isFocused ? "#ff6600" : "#8e8e8e")};
`;

const PasswordIconWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 54px;
  font-size: 24;
  color: #8e8e8e;
  cursor: pointer;
`;
