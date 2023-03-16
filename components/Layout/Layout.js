import Header from "../Header/Header";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function Layout({ children }) {
  const [theme, toggleTheme, lightTheme, darkTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
}
