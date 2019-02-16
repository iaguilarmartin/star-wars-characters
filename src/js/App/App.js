import React from 'react';
import { Global } from '@emotion/core';

import globalStyles from './styles/global';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <div>Star Wars Characters</div>
  </>
);

export default App;
