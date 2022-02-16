import { css } from '@emotion/react';
import { color } from './variables';
import font from '@assets/fonts/roboto-regular.woff';

export const globalStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${font});
  }

  html {
    box-sizing: border-box;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  * {
    box-sizing: inherit;
    outline: none;
  }

  ::before {
    box-sizing: inherit;
    outline: none;
  }

  ::after {
    box-sizing: inherit;
    outline: none;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  :root {
    font-size: 10px;
  }

  .wrapper {
    min-width: 320px;
    width: 100vw;
    height: 100vh;
  }

  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px;
  }

  input:focus {
    outline: none;
  }

  body {
    position: relative;

    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${color['black-color']};

    background-color: ${color['white-color']};

    user-select: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 300px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .reset-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .wrapper {
    min-width: 320px;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 50px;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color['grey-color']};
    background-clip: padding-box;
    border-radius: 5px;
  }

  // Buttons

  .delete,
  .mark {
    min-width: 65px;
    max-height: 50px;
    padding: 5px;

    border-radius: 3px;

    font-weight: 600;

    transition: all 0.2s ease;
    &:enabled:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: none;
    }
  }

  .delete {
    border: 1px solid ${color.primary};

    color: ${color.primary};

    &:enabled:hover {
      border-color: ${color.primary};

      color: ${color['white-color']};

      background-color: ${color.primary};
    }
  }

  .mark {
    border: 1px solid ${color['green-color']};

    color: ${color['green-color']};

    &:enabled:hover {
      border-color: ${color['green-color']};

      color: ${color['white-color']};

      background-color: ${color['green-color']};
    }
  }

  .manage {
    padding: 10px;
    border: 1px solid ${color['blue-color']};
    border-radius: 7px;

    color: ${color['blue-color']};
    font-weight: 600;

    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    transition: all 0.2s ease;
    &:disabled {
      border-color: ${color['gray-color']};

      color: ${color['gray-color']};
    }
    &:enabled {
      border-color: ${color['green-color--light']};

      color: ${color['green-color--light']};

      cursor: pointer;
    }
    &:enabled.active {
      color: ${color['white-color']};
    }
    &:enabled:hover {
      border-color: ${color['green-color--light']};

      color: ${color['white-color']};

      background-color: ${color['green-color--light']};
    }

    &:active {
      color: ${color['white-color']};
      box-shadow: none;
    }
  }

  .active {
    border-color: ${color['green-color--light']};

    color: ${color['white-color']};

    background-color: ${color['green-color--light']};
    box-shadow: none;
  }

  // GitLink

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
