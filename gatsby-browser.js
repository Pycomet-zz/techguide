import React from 'react';
import "firebase/auth";
import "firebase/database";

import App from './src/components/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
