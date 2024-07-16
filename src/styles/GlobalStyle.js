import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --Orange-10: #FF6600;
  --Orange-20: #FFB280;

  --Grayscale-50: #8E8E8E;
  --Grayscale-40: #535353;
  --Grayscale-30: #A5A5A5;
  --Grayscale-20: #F3F3F3;
  --Grayscale-10: #FFF;

  --Red-20: #FFE1E1;
  --Red-10: #EA4335;
}

*{
  box-sizing: border-box;
  margin: 0;
}
html,
  body {
    font-family: Pretendard;
    font-size: 62.5%;
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