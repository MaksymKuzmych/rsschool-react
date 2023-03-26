import React from 'react';
import { describe, it } from 'vitest';

import { HeaderWithRouter } from '../components/Header/Header';

describe('Header', () => {
  it('Should be defined', () => {
    expect(<HeaderWithRouter />).toBeDefined();
  });
});
