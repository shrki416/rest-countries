import { useEffect, useState } from "react";

const lightTheme = {
  body: `var(--gray-100)`,
  accent: `var(--white)`,
  text: "#000",
};

const darkTheme = {
  body: `var(--blue-600)`,
  accent: `var(--blue-500)`,
  text: "#FFF",
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  function setMode(mode) {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme, lightTheme, darkTheme];
};
