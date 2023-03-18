import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeaderWithRouter } from '../Header/Header';
import { Main } from '../../pages/Main/Main';
import { About } from '../../pages/About/About';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Footer } from '../Footer/Footer';

export class App extends Component {
  render = () => (
    <>
      <HeaderWithRouter />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
