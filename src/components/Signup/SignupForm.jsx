import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import useModalToggle from "../../hooks/useModalToggle";
import axios from "../../api/axios";
import ModalCheckIt from "../Modal/ModalCheckIt";
import Input from "../userMolcules/Input";

import styled from "styled-components";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false); // 회원가입 성공 모달
  const [isModalOpen, openModal, closeModal, toggleModal] =
    useModalToggle(false); // 회원가입 실패 모달
  const [isChecked, setIsChecked] = useState(false); // 이용약관 체크
  const [emailError, setemailError] = useState(false); // 각종 에러 문구
  const [pwdError, setpwdError] = useState(false);
  const [pwdCheckError, setpwdCheckError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const signupData = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
    };
    handleSubmits(signupData);
  };
  const email = watch("email");
  const nickname = watch("nickname");
  const password = watch("password");
  const passwordCheck = watch("passwordCheck");

  // 이용약관 체크 확인
  const handleCheckBoxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // 회원가입 실행
  const handleSubmits = async (data) => {
    try {
      if (isChecked && !emailError && !pwdCheckError && !nicknameError) {
        const response = await axios.post("users", data);
        if (response.status === 201) {
          setShowSuccessModal(true);
          navigate.push("/signin");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        openModal();
      } else {
        console.error("회원가입 요청 오류:", error);
      }
    }
  };

  const handleModalToggle = () => {
    toggleModal();
  };

  // 유효성검사 true 나오게끔
  const validateEmail = (email) => {
    const isvalidateEmail = /\S+@\S+\.\S+/.test(email);
    setemailError(!isvalidateEmail);
  };

  const validatePassword = (password) => {
    const isvalidatePassword = password?.length >= 8;
    setpwdError(!isvalidatePassword);
  };

  const validatePasswordCheck = (passwordCheck, password) => {
    const isvalidatePasswordCheck = password === passwordCheck;
    setpwdCheckError(!isvalidatePasswordCheck);
  };

  const validateNickname = (nickname) => {
    const isvalidateNuckname = nickname?.length <= 10 && nickname?.length !== 0;
    setNicknameError(!isvalidateNuckname);
  };

  useEffect(() => {
    if (email !== "") {
      validateEmail(email);
    } else if (email === "") {
      setemailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (nickname !== "") {
      validateNickname(nickname);
    } else if (nickname === "") {
      setNicknameError(false);
    }
  }, [nickname]);

  useEffect(() => {
    if (password !== "") {
      validatePassword(password);
    } else if (password === "") {
      setpwdError(false);
    }
  }, [password]);

  useEffect(() => {
    if (passwordCheck !== "") {
      validatePasswordCheck(passwordCheck, password);
    } else if (passwordCheck === "") {
      setpwdCheckError(false);
    }
  }, [passwordCheck, password]);

  // foucs out
  const handleBlur = (field) => {
    return () => {
      switch (field) {
        case "email":
          validateEmail(email);
          break;
        case "nickname":
          validateNickname(nickname);
          break;
        case "password":
          validatePassword(password);
          break;
        case "passwordCheck":
          validatePasswordCheck(passwordCheck, password);
          break;
        default:
          break;
      }
    };
  };

  // foucs in
  const handleFocus = (field) => {
    return () => {
      switch (field) {
        case "email":
          setemailError(false);
          break;
        case "nickname":
          setNicknameError(false);
          break;
        case "password":
          setpwdError(false);
          break;
        case "passwordCheck":
          setpwdCheckError(false);
          break;
        default:
          break;
      }
    };
  };

  // 에러메세지가 없고 모든값이 빈값이 아닐때 버튼 활성화
  const lastCheck =
    isChecked &&
    !emailError &&
    !nicknameError &&
    !pwdError &&
    !pwdCheckError &&
    email !== "" &&
    password !== "" &&
    nickname !== "" &&
    passwordCheck == password;

  return (
    <>
      {showSuccessModal && (
        <ModalCheckIt
          text="가입이 완료되었습니다!"
          submitButton="확인"
          wrong={handleModalToggle}
        />
      )}
      {isModalOpen && (
        <ModalCheckIt
          text="이미 사용 중인 이메일입니다."
          submitButton="확인"
          wrong={handleModalToggle}
        />
      )}
      <S.Container>
        <S.Logo
          onClick={() => {
            navigate("/");
          }}
        />
        <S.Text>첫 방문을 환영합니다!</S.Text>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            hookform={register("email", { pattern: /\S+@\S+\.\S+/ })}
            data="이메일"
            title="이메일"
            placeholder="이메일을 입력해 주세요"
            wrong={emailError}
            name="email"
            handleFocus={handleFocus("email")}
            handleBlur={handleBlur("email")}
          />
          <Input
            hookform={register("nickname")}
            data="닉네임"
            title="닉네임"
            placeholder="닉네임을 입력해 주세요"
            wrong={nicknameError}
            name="nickname"
            handleFocus={handleFocus("nickname")}
            handleBlur={handleBlur("nickname")}
          />
          <Input
            hookform={register("password")}
            title="비밀번호"
            placeholder="8자 이상 입력해 주세요"
            data="pwd"
            wrong={pwdError}
            name="password"
            handleFocus={handleFocus("password")}
            handleBlur={handleBlur("password")}
          />
          <Input
            hookform={register("passwordCheck")}
            title="비밀번호확인"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            data="pwd"
            wrong={pwdCheckError}
            name="passwordCheck"
            handleFocus={handleFocus("passwordCheck")}
            handleBlur={handleBlur("passwordCheck")}
          />
          <S.CheckBox>
            <S.CheckInput
              type="checkbox"
              id="agree"
              name="agree"
              onChange={handleCheckBoxChange}
            />
            <S.Label htmlFor="agree">이용약관에 동의합니다</S.Label>
          </S.CheckBox>
          {lastCheck ? (
            <S.Button type="submit">가입하기</S.Button>
          ) : (
            <S.NoneButton>가입하기</S.NoneButton>
          )}
        </S.Form>
      </S.Container>
    </>
  );
}

const S = {
  Signinback: styled.div`
    width: 100%;
    height: 100vh;
    background: var(--gray-FAFAFA);
  `,
  Signin: styled.div`
    width: 100%;
    max-width: 52rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  LogoWrap: styled.div`
    margin-bottom: 3.8rem;
    text-align: center;
    & p {
      color: var(--black-333236);
      font-size: 2rem;
      font-weight: 500;
      margin-top: 1rem;
    }
  `,
  Logo: styled.div`
    width: 20rem;
    height: 27.9rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    @media all and (max-width: 767px) {
      width: 11.9rem;
      height: 16.5rem;
    }
  `,
  LoginForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media all and (max-width: 767px) {
      padding: 0 1.2rem;
    }
  `,
  Submit: styled.input`
    display: flex;
    width: 100%;
    max-width: 52rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--violet-5534DA);
    color: var(--white-FFFFFF);
    font-size: 1.8rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
  `,

  Signup: styled.div`
    color: var(--black-333236);
    text-align: center;
    font-size: 1.6rem;
    margin-top: 2.4rem;
    & span {
      color: var(--violet-5534DA);
      text-decoration-line: underline;
      margin-left: 0.5rem;
    }
  `,
};
