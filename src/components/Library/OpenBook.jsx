import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";

const Modal = ({ isOpen, onClose, title }) => {
	const props = useSpring({
		opacity: isOpen ? 1 : 0,
		transform: isOpen ? "translateY(0)" : "translateY(-100%)",
		config: { tension: 300, friction: 20 },
	});

	if (!isOpen) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<animated.div style={props}>
				<ModalContent onClick={(e) => e.stopPropagation()}>
					<h1>{"hi"}</h1>
					{/* <CloseButton onClick={onClose}>X</CloseButton> */}
				</ModalContent>
			</animated.div>
		</ModalOverlay>
	);
};

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

const ModalContent = styled.div`
	width: 190px;
	height: 180px;
	background: white;
	border-radius: 8px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: #ff0000;
	color: white;
	border: none;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Modal;
