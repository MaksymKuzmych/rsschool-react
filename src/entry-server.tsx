import React from 'react';
import { Provider } from 'react-redux';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './components/App/App';
import { store } from './redux/store';

import './index.css';

export const render = (url: string, options?: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
};
