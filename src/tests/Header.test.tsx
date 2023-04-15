import React from 'react';
import { describe, it } from 'vitest';

import { Header } from '../components/Header/Header';

describe('Header', () => {
  it('Should be defined', () => {
    expect(<Header />).toBeDefined();
  });
});
