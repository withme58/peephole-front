import React, { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

import styled from "styled-components";

export default function Input(
  data,
  placeholder,
  title,
  errorMessage,
  handleBlur,
  value,
  hookform,
  name,
  disabled,
  defaultValue,
  handleFocus
) {
  const [password, setPassword] = useState(true);

  const handlepassword = () => {
    setPassword((prev) => !prev);
  };

  return (
    <>
      {data !== "password" ? (
        <InputWrap>
          <Label htmlFor={data}>{title}</Label>
          <TextInput
            {...hookform}
            onBlur={handleBlur}
            type={data === "이메일" ? "email" : "text"}
            id={data}
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            $ErrorMessage={!!errorMessage}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {errorMessage && data === "이메일" && (
            <ErrorMessage>{data} 형식으로 작성해 주세요.</ErrorMessage>
          )}
          {errorMessage && data === "닉네임" && (
            <ErrorMessage>10자 이하로 작성해주세요.</ErrorMessage>
          )}
        </InputWrap>
      ) : (
        <InputWrap>
          <Label htmlFor={data + title}>{title}</Label>
          <InputInner>
            <input
              {...hookform}
              type={password ? "password" : "text"}
              id={data + title}
              placeholder={placeholder}
              onBlur={handleBlur}
              value={value}
              onFocus={handleFocus}
              $ErrorMessage={!!errorMessage}
              name={name}
            />
            <ImageWrap onClick={handlepassword}>
              {password ? <IoMdEyeOff /> : <IoMdEye />}
            </ImageWrap>
          </InputInner>
          {errorMessage &&
            (title === "비밀번호" ? (
              <ErrorMessage>8자 이상 입력해 주세요.</ErrorMessage>
            ) : (
              <ErrorMessage>비밀번호를 확인해 주세요.</ErrorMessage>
            ))}
        </InputWrap>
      )}
    </>
  );
}

const InputWrap = styled.div`
  width: 100%;
  max-width: 52rem;
  height: 7.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InputInner = styled.div`
  position: relative;
  background: var(--light-gray);
`;

const Label = styled.label`
  color: var(--light-gray);
  font-size: 1.6rem;
  font-weight: 400;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 15px 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.$errorMessage
      ? "2px solid var(--point-warning)"
      : "2px solid var(--moss-green)"};
  background: #fff;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;

const ImageWrap = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.6rem;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: var(--point-warning);
  font-size: 1.4rem;
`;
