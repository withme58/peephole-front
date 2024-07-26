import React, { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import styled from "styled-components";
import { IoMail } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";

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
          <S.inputInner>
            <S.iconWrap>
              <IoMail size={20} color="#919597" />
            </S.iconWrap>
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
          </S.inputInner>
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + title}>{title}</S.label>
          <S.inputInner>
            <S.iconWrap>
              <IoIosLock size={24} color="#919597" />
            </S.iconWrap>
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
              {password ? (
                <IoMdEyeOff size={24} color="#919597" />
              ) : (
                <IoMdEye size={24} color="#919597" />
              )}
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
    gap: 10px;
  `,
  inputInner: styled.div`
    position: relative;
    background: transparent;
  `,
  label: styled.label`
    color: #919597;
    font-size: 1.6rem;
    font-weight: 400;
  `,
  input: styled.input`
    width: 100%;
    padding: 15px 44px;
    border-radius: 10px;
    border: ${(props) =>
      props.errorMessage ? "1px solid var(--point-warning)" : "none"};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    background: rgba(243, 243, 243, 0.2);
  `,
  iconWrap: styled.div`
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
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
