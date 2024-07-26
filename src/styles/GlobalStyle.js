import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --light-green: #CBD2C6;
  --matcha-green: #8ba88e;
  --moss-green: #5A786F;
  --forest-green: #3B4E51;
  --deep-green: #323E45;
  
  --light-gray: #f3f3f3;
  --deep-gray: #A5A5A5;
  --light-red: #ffe1e1;
  --white-green: #eaefe6;

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
    font-family: Pretendard;
    font-size: 62.5%;
    background-image: url('images/background_blue.png');
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
