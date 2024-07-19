import styled from "styled-components";

export default function ModalCheckIt(
  submitButtonText,
  text,
  cancelButton,
  errorMessage
) {
  return (
    <Background>
      <Container height={"250px"} width={"540px"}>
        <Description>{text}</Description>
        <ButtonFlex>
          {cancelButton && <CancelButton>{cancelButton}</CancelButton>}
          <Button onClick={errorMessage}>{submitButtonText}</Button>
        </ButtonFlex>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div``;
const Description = styled.p``;
const ButtonFlex = styled.div``;
const CancelButton = styled.button``;
const Button = styled.button``;
