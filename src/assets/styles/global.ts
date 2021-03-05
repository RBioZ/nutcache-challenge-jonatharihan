import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #fff;
    --color-primary: #7ce0d3;
    --color-secondary: #f4364c;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  hmtl,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
