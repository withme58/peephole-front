import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --main-blue: #42aacb;
  --tapped-blue: #2e8daf;
  --hover-blue: #78c7e0;
  --inactive-blue: #a0d5e5;
  
  --disabled-gray: #acacac;
  --light-gray: #f3f3f3; //배경색
  --deep-gray: #a5a5a5;
  --blue-gray: #3d4954;

  --blue-black: #1a1e1d

  --light-red: #ffe1e1;

  --body-text: #8e8e8e;
  --title-text: #535353;

  --point-warning: #e84444;
  
}

*{
  box-sizing: border-box;
  margin: 0;
}
html,
  body {
    font-family: "Noto Sans KR", sans-serif;
    background: #1a1e1d;
    background-image: url('images/background_blue.png');
    background-size: 498px auto; 
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 768px) {
      background: #1a1e1d;
      background-image: url('images/background_blue.png');
      background-size: cover; 
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
    padding: none;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export default GlobalStyle;
