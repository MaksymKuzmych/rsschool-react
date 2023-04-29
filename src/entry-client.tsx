import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App/App';
import { initStore, rootState } from './redux/store';

import './index.css';

type WindowInstanse = Window &
  typeof globalThis & {
    PRELOADED_STATE?: rootState;
  };

const store = initStore((window as WindowInstanse).PRELOADED_STATE);

delete (window as WindowInstanse).PRELOADED_STATE;

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
