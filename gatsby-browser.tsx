import './src/styles/global.css'

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your created theme

// Wrap your Gatsby app with ThemeProvider
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

