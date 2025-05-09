// /pages/_app.js
import DarkThemeProvider from "@/context/darkTheme";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css"; // (Optional: if you use global styles)

export default function App({ Component, pageProps }) {
  return (
    <DarkThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </DarkThemeProvider>
  );
}
