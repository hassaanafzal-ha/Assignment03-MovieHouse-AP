import { createContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const DarkTheme = createContext();

export default function DarkThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setMode(saved);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <DarkTheme.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkTheme.Provider>
  );
}
