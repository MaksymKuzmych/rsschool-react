import React from 'react';
import { Provider } from 'react-redux';

import { Header } from '../Header/Header';
import { AppRoutes } from '../../routes/AppRoutes';
import { Footer } from '../Footer/Footer';
import { store } from '../../redux/store';

export const App = () => (
  <Provider store={store}>
    <Header />
    <AppRoutes />
    <Footer />
  </Provider>
);
