import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import axios from "../../api/axios";

import useModalToggle from "../../hooks/useModalToggle";
import ModalCheckIt from "../Molcules/ModalCheckIt";

import Input from "../Molcules/Input";

import styled from "styled-components";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false); // 회원가입 성공 모달
  const [isModalOpen, openModal, closeModal, toggleModal] =
    useModalToggle(false); // 회원가입 실패 모달
  const [emailError, setemailError] = useState(false); // 각종 에러 문구
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const signupData = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    handleSubmits(signupData);
  };
  const email = watch("email");
  const name = watch("name");
  const password = watch("password");
  const passwordCheck = watch("passwordCheck");

  const handleSubmits = async (data) => {
    try {
      if (!emailError && !passwordCheckError && !nameError) {
        const response = await axios.post("/open-api/signup", data);
        if (response.status === 200) {
          navigate("/login");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        openModal();
      } else if (error.response.status === 401) {
        alert("닉네임이 중복됩니다.", error);
      } else if (error.response.status === 402) {
        alert("이메일이 중복됩니다.", error);
      }
    }
  };

  const handleModalToggle = () => {
    toggleModal();
  };

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

  const validateName = (name) => {
    const isvalidateNuckname = name?.length <= 10 && name?.length !== 0;
    setNameError(!isvalidateNuckname);
  };

  useEffect(() => {
    if (email !== "") {
      validateEmail(email);
    } else if (email === "") {
      setemailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (name !== "") {
      validateName(name);
    } else if (name === "") {
      setNameError(false);
    }
  }, [name]);

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

  const handleBlur = (field) => {
    return () => {
      switch (field) {
        case "email":
          validateEmail(email);
          break;
        case "name":
          validateName(name);
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

  const handleFocus = (field) => {
    return () => {
      switch (field) {
        case "email":
          setemailError(false);
          break;
        case "name":
          setNameError(false);
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

  const lastCheck =
    !emailError &&
    !nameError &&
    !passwordError &&
    !passwordCheckError &&
    email !== "" &&
    password !== "" &&
    name !== "" &&
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
          text="이미 사용 중인 이름입니다."
          submitButton="확인"
          errorMessage={handleModalToggle}
        />
      )}

      <StyledSignupForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          hookform={register("name")}
          data="nickname"
          title="닉네임"
          placeholder="닉네임을 입력해 주세요"
          errorMessage={nameError}
          name="name"
          handleFocus={handleFocus("name")}
          handleBlur={handleBlur("name")}
          watchValue={name} // 글자수 체크
        />
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
  background: #2e8daf;
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
