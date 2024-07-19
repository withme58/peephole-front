import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import Input from "../userMolcules/Input";
import ModalCheckIt from "../userMolcules/ModalCheckIt";

import useToggle from "../../hooks/useToggle";

import getAccessToken from "../../utils/token/getAccessToken";
import setAccessToken from "../../utils/token/setAccessToken";

export default function LoginForm() {
  const [emailError, setEmailError] = useState(false); // 각종 에러 문구
  const [passwordError, setPasswordError] = useState(false);
  const [showPasswordError, setShowPasswordError, showPasswordToggle] =
    useToggle(false);
  const { register, handleSubmit, watch } = useForm();

  const email = watch("email");
  const password = watch("password");

  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    login(loginData);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const AccessToken = getAccessToken();
    if (AccessToken !== null) {
      navigate.push("/");
    }
  }, [navigate]);

  // ----api 관련 함수 필요----

  async function login(data) {}

  const validateEmail = (email) => {
    const isvalidateEmail = /\S+@\S+\.\S+/.test(email);
    setEmailError(!isvalidateEmail);
  };

  useEffect(() => {
    if (email !== "") {
      validateEmail(email);
    } else if (email === "") {
      setEmailError(false);
    }
  }, [email]);

  const validatePassword = (password) => {
    const isvalidatePassword = password?.length >= 8; //비밀번호 8자리 이상으로 임의 설정
    setPasswordError(!isvalidatePassword);
  };

  useEffect(() => {
    if (password !== "") {
      validatePassword(password);
    } else if (password === "") {
      setPasswordError(false);
    }
  }, [password]);

  const handleBlur = (field) => {
    return () => {
      switch (field) {
        case "email":
          validateEmail(email);
          break;
        case "password":
          validatePassword(password);
          break;
        default:
          break;
      }
    };
  };

  const handleFocus = (field) => {
    return () => {
      switch (field) {
        case "email":
          setEmailError(false);
          break;
        case "password":
          setPasswordError(false);
          break;
        default:
          break;
      }
    };
  };

  const lastCheck =
    !emailError && !passwordError && email !== "" && password !== "";

  return (
    <>
      {showPasswordError && (
        <ModalCheckIt
          text="비밀번호가 일치하지 않습니다."
          submitButtonText="확인"
          errorMessage={showPasswordToggle}
        />
      )}
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          hookform={register("email", { pattern: /\S+@\S+\.\S+/ })}
          title="이메일"
          placeholder="이메일을 입력해 주세요"
          data="이메일"
          errorMessage={emailError}
          name="email"
          handleFocus={handleFocus("email")}
          handleBlur={handleBlur("email")}
        />
        <Input
          hookform={register("password")}
          title="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          data="password"
          errorMessage={passwordError}
          name="password"
          handleFocus={handleFocus("password")}
          handleBlur={handleBlur("password")}
        />
        {lastCheck ? (
          <Button type="submit">로그인</Button>
        ) : (
          <DisableButton>로그인</DisableButton>
        )}
      </StyledLoginForm>
    </>
  );
}

const StyledLoginForm = styled.form``;

const Button = styled.button``;

const DisableButton = styled.button``;
