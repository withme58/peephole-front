import React, { useState, useEffect } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import styled from "styled-components";
import { IoMail } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

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
  watchValue,
}) {
  const [password, setPassword] = useState(true);
  const [charCount, setCharCount] = useState(0);

  const handlePassword = () => {
    setPassword((prev) => !prev);
  };

  useEffect(() => {
    if (name === "name" && watchValue !== undefined) {
      setCharCount(watchValue.length);
    }
  }, [watchValue, name]);

  const getIcon = () => {
    switch (data) {
      case "nickname":
      case "name":
        return <IoPersonSharp size={20} color="#919597" />;
      case "이메일":
        return <IoMail size={20} color="#919597" />;
      default:
        return null;
    }
  };

  return (
    <>
      {data !== "password" ? (
        <S.inputWrap>
          <S.label htmlFor={data}>{title}</S.label>
          <S.inputInner>
            <S.iconWrap>{getIcon()}</S.iconWrap>
            <S.input
              {...hookform}
              onBlur={handleBlur}
              onFocus={handleFocus}
              type={data === "이메일" ? "email" : "text"}
              id={data}
              placeholder={placeholder}
              value={value}
              errorMessage={errorMessage}
              name={name}
              disabled={disabled}
              defaultValue={defaultValue}
            />
            {name === "name" && <S.charCount>{charCount}/10</S.charCount>}
          </S.inputInner>
          {errorMessage && data === "이메일" && (
            <S.errorMessage visible={errorMessage}>
              {data} 형식으로 작성해 주세요.
            </S.errorMessage>
          )}
          {errorMessage && (data === "이름" || data === "nickname") && (
            <S.errorMessage visible={errorMessage}>
              10자 이하로 작성해주세요.
            </S.errorMessage>
          )}
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
              onFocus={handleFocus}
              value={value}
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
              <S.errorMessage visible={errorMessage}>
                8자 이상 입력해 주세요.
              </S.errorMessage>
            ) : (
              <S.errorMessage visible={errorMessage}>
                비밀번호를 확인해 주세요.
              </S.errorMessage>
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
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  inputInner: styled.div`
    position: relative;
    background: transparent;
    display: flex;
    align-items: center;
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
    &:focus {
      border: 1px solid var(--main-blue);
      background: white;
      color: var(--main-blue);
    }
  `,
  iconWrap: styled.div`
    position: absolute;
    left: 1.6rem;
    pointer-events: none;
  `,
  imageWrap: styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 1.6rem;
    cursor: pointer;
  `,
  errorMessage: styled.div`
    color: var(--point-warning);
    font-size: 1.4rem;
    margin-top: 5px;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  `,
  charCount: styled.div`
    position: absolute;
    color: #919597;
    font-size: 1.4rem;
    right: 2rem;
    cursor: pointer;
  `,
};
