import React, { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";

import Image from "next/image";
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
        <div className={S.inputWrap}>
          <label className={S.label} htmlFor={data}>
            {title}
          </label>
          <input
            {...hookform}
            onBlur={handleBlur}
            type={data === "이메일" ? "email" : "text"}
            id={data}
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            className={`${S.input} ${errorMessage ? S.errorMessage : ""}`}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {errorMessage && data === "이메일" && (
            <div className={S.errorMessage}>{data} 형식으로 작성해 주세요.</div>
          )}
          {errorMessage && data === "닉네임" && (
            <div className={S.errorMessage}>10자 이하로 작성해주세요.</div>
          )}
        </div>
      ) : (
        <div className={S.inputWrap}>
          <label className={S.label} htmlFor={data + title}>
            {title}
          </label>
          <div className={S.inputInner}>
            <input
              {...hookform}
              type={password ? "password" : "text"}
              id={data + title}
              placeholder={placeholder}
              onBlur={handleBlur}
              value={value}
              onFocus={handleFocus}
              className={`${S.input} ${errorMessage ? S.errorMessage : ""}`}
              name={name}
            />
            <div className={S.imageWrap} onClick={handlepassword}>
              {password ? (
                <Image
                  src={
                    "/images/icons/icon-eyesOff-filledGray_9FA6B2-w24-h24.svg"
                  }
                  alt="off"
                  fill
                />
              ) : (
                <Image
                  src={
                    "/images/icons/icon-eyesOn-filledGray_9FA6B2-w24-h24.svg"
                  }
                  alt="on"
                  fill
                />
              )}
            </div>
          </div>
          {errorMessage &&
            (title === "비밀번호" ? (
              <div className={S.errorMessage}>8자 이상 입력해 주세요.</div>
            ) : (
              <div className={S.errorMessage}>비밀번호를 확인해 주세요.</div>
            ))}
        </div>
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
  `,
  label: styled.label`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.6rem;
    font-weight: 400;
  `,
  input: styled.input`
    width: 100%;
    padding: 15px 16px;
    border-radius: 8px;
    border: ${(props) =>
      props.$errorMessage
        ? "1px solid var(--red-D6173A, #D6173A)"
        : "1px solid var(--violet-5534DA), #5534DA"};
    background: ${({ theme }) => theme.color.white_FFFFFF};
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
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 1.4rem;
  `,
};
