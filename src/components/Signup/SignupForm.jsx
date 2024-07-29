import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import axios from "../../api/axios";

import useModalToggle from "../../hooks/useModalToggle";
import ModalCheckIt from "../userMolcules/ModalCheckIt";

import Input from "../userMolcules/Input";

import styled from "styled-components";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false); // 회원가입 성공 모달
  const [isModalOpen, openModal, closeModal, toggleModal] =
    useModalToggle(false); // 회원가입 실패 모달
  const [isChecked, setIsChecked] = useState(false); // 이용약관 체크
  const [emailError, setemailError] = useState(false); // 각종 에러 문구
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
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
      if (isChecked && !emailError && !passwordCheckError && !nicknameError) {
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
    setPasswordError(!isvalidatePassword);
  };

  const validatePasswordCheck = (passwordCheck, password) => {
    const isvalidatePasswordCheck = password === passwordCheck;
    setPasswordCheckError(!isvalidatePasswordCheck);
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
      setPasswordError(false);
    }
  }, [password]);

  useEffect(() => {
    if (passwordCheck !== "") {
      validatePasswordCheck(passwordCheck, password);
    } else if (passwordCheck === "") {
      setPasswordCheckError(false);
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
          setPasswordError(false);
          break;
        case "passwordCheck":
          setPasswordCheckError(false);
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
    !passwordError &&
    !passwordCheckError &&
    email !== "" &&
    password !== "" &&
    nickname !== "" &&
    passwordCheck === password;

  return (
    <>
      {showSuccessModal && (
        <ModalCheckIt
          text="가입이 완료되었습니다!"
          submitButton="확인"
          errorMessage={handleModalToggle}
        />
      )}
      {isModalOpen && (
        <ModalCheckIt
          text="이미 사용 중인 이메일입니다."
          submitButton="확인"
          errorMessage={handleModalToggle}
        />
      )}

      <StyledSignupForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          hookform={register("email", { pattern: /\S+@\S+\.\S+/ })}
          data="이메일"
          title="이메일"
          placeholder="이메일을 입력해 주세요"
          errorMessage={emailError}
          name="email"
          handleFocus={handleFocus("email")}
          handleBlur={handleBlur("email")}
        />
        <Input
          hookform={register("nickname")}
          data="닉네임"
          title="닉네임"
          placeholder="닉네임을 입력해 주세요"
          errorMessage={nicknameError}
          name="nickname"
          handleFocus={handleFocus("nickname")}
          handleBlur={handleBlur("nickname")}
        />
        <Input
          hookform={register("password")}
          title="비밀번호"
          placeholder="8자 이상 입력해 주세요"
          data="password"
          errorMessage={passwordError}
          name="password"
          handleFocus={handleFocus("password")}
          handleBlur={handleBlur("password")}
        />
        <Input
          hookform={register("passwordCheck")}
          title="비밀번호확인"
          placeholder="비밀번호를 한번 더 입력해 주세요"
          data="password"
          errorMessage={passwordCheckError}
          name="passwordCheck"
          handleFocus={handleFocus("passwordCheck")}
          handleBlur={handleBlur("passwordCheck")}
        />
        {/* <S.CheckBox>
          <S.CheckInput
            type="checkbox"
            id="agree"
            name="agree"
            onChange={handleCheckBoxChange}
          />
          <S.Label htmlFor="agree">이용약관에 동의합니다</S.Label>
        </S.CheckBox> */}
        {lastCheck ? (
          <Button type="submit">가입하기</Button>
        ) : (
          <DisableButton>가입하기</DisableButton>
        )}
      </StyledSignupForm>
    </>
  );
}

const StyledSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Button = styled.button`
  width: 35.1rem;
  height: 5rem;
  margin-top: 70px;
  border: none;
  border-radius: 0.8rem;
  background: var(--moss-green);
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
`;

const DisableButton = styled.button`
  width: 35.1rem;
  height: 5rem;
  margin-top: 70px;
  border: none;
  border-radius: 0.8rem;
  background: var(--deep-gray);
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;
