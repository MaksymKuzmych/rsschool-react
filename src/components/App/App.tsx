import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { FormPage } from '../../pages/FormPage/FormPage';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Footer } from '../Footer/Footer';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);
