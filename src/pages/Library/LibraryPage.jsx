import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LibraryBook from "../../components/Library/LibraryBook";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const books = Array.from({ length: 18 }, (_, index) => ({
	id: index,
	// title: `Book ${index + 1}`,
	title: '책 이름'
}));

export default function LibraryPage() {
	// const [books, setBooks] = useState([]);

	// useEffect(() => {
	//   axios.get('http://localhost:8080/answer/list')
	//   .then(response => {
	//     // if(response.status === 200)
	//     console.log(response.data);
	//     setBooks(response.data?.body.answers);
	//   })
	//   .catch(error => {
	//     console.log(error)
	//   })
	// }, [])

	return (
		
		<CenteredContainer>
				

			<PageContainer>
				<HeadContainer>
					<BackButton onClick={() => window.history.back()}>
						<FaArrowLeft />
					</BackButton>
					<Heading>피폴 응답</Heading>
				</HeadContainer>
				<BookList>
					{books.map((book) => (
						<LibraryBook key={book.id} title={book.title} />
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
	overflow-x: hidden; /* 수평 스크롤바 제거 */

	&::-webkit-scrollbar {
		display: none;
	}
`;

const HeadContainer = styled.div`
	width: 100%;
	height: 256px; 
	color: #f0f0f0;
	// background-color: #f0f0f0;
	display: flex;
	// justify-content: space-between; /* 좌우 요소를 배치 */
	justify-content: flex-start; /* 왼쪽 정렬 */
	// justify-content: center;
	align-items: flex-start; /* 상단 정렬 center는 중앙*/
	padding-top: 77px; /* 상단에 패딩 추가 */
	padding-left:0px;
	// border-bottom: 1px solid #ddd;
	flex-shrink: 0; /* 부모 컨테이너의 flex 속성에 의해 높이가 축소되지 않도록 설정 */
	font-family: 'SF Pro Text', sans-serif; /* 글꼴 설정 */
	font-size: 10px; /* 높이 설정 */
	line-height: 30px; /* 텍스트 줄 높이 설정 */
	
`;


const BookList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	// grid-template-rows: repeat(auto-fill, 272px);
		grid-auto-rows: 272px; /* 각 행의 높이를 272px로 설정 */

	gap: 10px;
	width: calc(100% - 55px); /* 오른쪽 이동 */
	margin-left: 35px; /* 왼쪽으로 이동 효과 */
`;

const BackButton = styled.button`
	background: transparent;
	border: none;
	color: #ffffff;
	cursor: pointer;
	font-size: 24px;
	// transition: color 0.3s;

	&:hover {
		color: #ffffff;
	}
`;

const Heading = styled.h1`
	margin-left: 150px; /* 왼쪽으로 10px 이동 */
`;