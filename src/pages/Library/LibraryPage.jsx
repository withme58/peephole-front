import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LibraryBook from "../../components/Library/LibraryBook";
import axios from "../../api/axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LibraryPage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/answer/list');
        console.log(response.data); 
        if (Array.isArray(response.data.body)) {
          const booksData = response.data.body.map((item) => ({
            id: item.questionId,
            title: item.questionContent,
          }));
          setBooks(booksData);
        } else {
          console.error('Expected an array in the body');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const handleBackButtonClick = () => {
    navigate('/'); // MainPage로 이동
  };

  return (
    <CenteredContainer>
      <PageContainer>
        <HeadContainer>
          <BackButton onClick={handleBackButtonClick}>
            <FaArrowLeft />
          </BackButton>
          <Heading>피폴 응답</Heading>
        </HeadContainer>
        <BookList>
          {books.map((book) => (
            <LibraryBook key={book.id} title={book.title} questionId={book.id} />
          ))}
        </BookList>
      </PageContainer>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const PageContainer = styled.div`
  width: 498px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  border: 2px solid black;
  overflow-y: auto;
  overflow-x: hidden; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  height: 256px;
  color: #f0f0f0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 77px;
  padding-left:0px;
  flex-shrink: 0;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 10px;
  line-height: 30px;
`;

const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 272px; 
  gap: 10px;
  width: calc(100% - 55px); 
  margin-left: 35px; 
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    color: #ffffff;
  }
`;

const Heading = styled.h1`
  margin-left: 150px; 
`;
