import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: 'lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText}
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
