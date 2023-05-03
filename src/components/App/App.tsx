import React from 'react';

import { Header } from '../Header/Header';
import { AppRoutes } from '../../routes/AppRoutes';
import { Footer } from '../Footer/Footer';

export const App = () => (
  <>
    <Header />
    <AppRoutes />
    <Footer />
  </>
);
