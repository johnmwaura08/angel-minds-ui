import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type { Theme as MUITheme } from '@mui/material/styles';

// A custom theme for this app

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: '#33A6DE'
      main: '#62A744'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const AngelMindsRequiredAsteriskColor = "#DB2828";
export type Theme = MUITheme;
export default theme;