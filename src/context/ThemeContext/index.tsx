import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";
import { ThemeProvider } from "styled-components";

type ThemeName = keyof typeof tokensWithReference;

interface ThemeContextType {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
}

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  themeName: "sistemasenlinea",
  setThemeName: () => {},
});

export const ThemeProviderWrapper = ({
  children,
}: ThemeProviderWrapperProps) => {
  const [themeName, setThemeName] = useState<ThemeName>("sistemasenlinea");

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
