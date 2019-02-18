import React from 'react';
import { Global } from '@emotion/core';

import globalStyles from './styles/global';
import App from './App';

export default () => (
  <>
    <Global styles={globalStyles} />
    <App />
  </>
);
