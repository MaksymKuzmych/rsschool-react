import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeaderWithRouter } from '../Header/Header';
import { MainPage } from '../../pages/MainPage/MainPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { FormPage } from '../../pages/FormPage/FormPage';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Footer } from '../Footer/Footer';

export class App extends Component {
  render = () => (
    <>
      <HeaderWithRouter />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
