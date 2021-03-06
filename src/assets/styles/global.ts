import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .react-modal-overlay {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    inset: 0;
    justify-content: center;
    position: fixed;
  }

  .react-modal-content {
    background: var(--background);
    border-radius: 0.25rem;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;
  }

  .react-modal-close {
    background: transparent;
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;
