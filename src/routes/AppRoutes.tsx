import React from 'react';
import { Route, Routes } from 'react-router';

import { Main } from '../pages/Main/Main';
import { About } from '../pages/About/About';
import { Form } from '../pages/Form/Form';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
