import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { inube } from "@inube/design-system";

interface DynamicThemeWrapperProps {
  children: JSX.Element;
}

const DynamicThemeWrapper = (props: DynamicThemeWrapperProps) => {
  const { children } = props;
  const [theme, setTheme] = useState({ ...inube.color.palette });
  const [selectedTokenName, setSelectedTokenName] = useState("N900");
  const [toggleActive, setToggleActive] = useState(false);

  const handleColorChange = (tokenName: string, newColor: string) => {
    if (newColor) {
      setTheme((prevTheme: typeof inube) => {
        const newPalette = { ...prevTheme };
        for (const category in newPalette) {
          if (newPalette[category][tokenName]) {
            newPalette[category][tokenName] = newColor;
            break;
          }
        }
        return newPalette;
      });
    } else {
      setSelectedTokenName(tokenName);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {React.cloneElement(children, {
        onColorChange: handleColorChange,
        tokenName: selectedTokenName,
        toggleActive: toggleActive,
        setToggleActive: setToggleActive,
      })}
    </ThemeProvider>
  );
};

export { DynamicThemeWrapper };
