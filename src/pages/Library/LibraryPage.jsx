import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LibraryBook from "../../components/Library/LibraryBook";
import axios from "axios";

const books = Array.from({ length: 50 }, (_, index) => ({
	id: index,
	title: `Book ${index + 1}`,
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
					<h1>Library Header</h1>
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
	&::-webkit-scrollbar {
		display: none;
	}
`;

const HeadContainer = styled.div`
	width: 100%;
	height: 256px; 
	background-color: #f0f0f0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #ddd;
	flex-shrink: 0; /* 부모 컨테이너의 flex 속성에 의해 높이가 축소되지 않도록 설정 */
`;


const BookList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(auto-fill, 272px);
	gap: 10px;
	padding: 0px 0; /* 컨텐츠와 헤더 사이에 여백 추가 */
`;