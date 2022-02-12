import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { App } from '@components/App';
import { globalStyle } from '@src/styles';

ReactDOM.render(
  <div className="container">
    <Global styles={globalStyle} />
    <App />
  </div>,
  document.getElementById('root'),
);
