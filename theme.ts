// mui theme.ts
import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
  primary: {
    main: '#007bff', // Your primary color
  },
  secondary: {
    main: '#ffc107', // Your secondary color
  },
};

const theme: ThemeOptions = {
  palette, // Apply your palette configuration
  // Other theme customizations can go here
};

export default createTheme(theme);