import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './containers';
import { RecoilRoot } from "recoil";
import * as serviceWorker from './serviceWorker';
import 'highlight.js/styles/default.css';

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
