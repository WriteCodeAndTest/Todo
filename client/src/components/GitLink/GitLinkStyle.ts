import { css } from '@emotion/react';

export const githubCorner = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;

  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
`;
