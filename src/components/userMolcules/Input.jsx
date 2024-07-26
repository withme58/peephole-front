import React, { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import styled from "styled-components";

export default function Input({
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
  handleFocus,
}) {
  const [password, setPassword] = useState(true);

  const handlePassword = () => {
    setPassword((prev) => !prev);
  };

  return (
    <>
      {data !== "password" ? (
        <S.inputWrap>
          <S.label htmlFor={data}>{title}</S.label>
          <S.input
            {...hookform}
            onBlur={handleBlur}
            type={data === "이메일" ? "email" : "text"}
            id={data}
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            errorMessage={errorMessage}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {errorMessage && data === "이메일" && (
            <S.errorMessage>{data} 형식으로 작성해 주세요.</S.errorMessage>
          )}
          {errorMessage && data === "닉네임" && (
            <S.errorMessage>10자 이하로 작성해주세요.</S.errorMessage>
          )}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + title}>{title}</S.label>
          <S.inputInner>
            <S.input
              {...hookform}
              type={password ? "password" : "text"}
              id={data + title}
              placeholder={placeholder}
              onBlur={handleBlur}
              value={value}
              onFocus={handleFocus}
              errorMessage={errorMessage}
              name={name}
            />
            <S.imageWrap onClick={handlePassword}>
              {password ? <IoMdEyeOff /> : <IoMdEye />}
            </S.imageWrap>
          </S.inputInner>
          {errorMessage &&
            (title === "비밀번호" ? (
              <S.errorMessage>8자 이상 입력해 주세요.</S.errorMessage>
            ) : (
              <S.errorMessage>비밀번호를 확인해 주세요.</S.errorMessage>
            ))}
        </S.inputWrap>
      )}
    </>
  );
}

const S = {
  inputWrap: styled.div`
    width: 100%;
    max-width: 52rem;
    height: 7.7rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  inputInner: styled.div`
    position: relative;
    background: var(--light-gray);
  `,
  label: styled.label`
    color: var(--light-gray);
    font-size: 1.6rem;
    font-weight: 400;
  `,
  input: styled.input`
    width: 100%;
    padding: 15px 16px;
    border-radius: 8px;
    border: ${(props) =>
      props.errorMessage
        ? "1px solid var(--point-warning)"
        : "1px solid var(--moss-green)"};
    background: #fff;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
  `,
  imageWrap: styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1.2rem;
    right: 1.6rem;
    cursor: pointer;
  `,
  errorMessage: styled.div`
    color: var(--point-warning);
    font-size: 1.4rem;
  `,
};
