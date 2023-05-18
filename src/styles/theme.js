import { createTheme } from "@mui/material/styles";

/* Theme */

const mainBlack = "#212121";
const mainWhite = "#fafafa";
const gold = "#FFD700";
const red = "#ff1744";
const blue = "#757ce8";

export const lightGrey = "#C4C4C4";
export const mediumGrey = "#AFAFAF";
export const darkGrey = "#6B6B6B";

const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
    },
    primary: {
      main: gold,
    },
    secondary: {
      main: mainBlack,
    },
    info: {
      main: blue,
    },
    error: {
      main: red,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
  },
});

export default theme;
