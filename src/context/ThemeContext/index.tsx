import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { ThemeProvider } from "styled-components";
import { tokensWithReference } from "@mocks/design/tokensWithReference";

type ThemeName = keyof typeof tokensWithReference;

interface ThemeContextType {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
}

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  themeName: "presente",
  setThemeName: () => {},
});

export const ThemeProviderWrapper = ({
  children,
}: ThemeProviderWrapperProps) => {
  const savedTheme =
    (localStorage.getItem("themeName") as ThemeName) || "presente";
  const [themeName, setThemeName] = useState<ThemeName>(savedTheme);

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
  }, [themeName]);

  const theme = {
    ...tokensWithReference[themeName],
  };

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export type { ThemeName };
