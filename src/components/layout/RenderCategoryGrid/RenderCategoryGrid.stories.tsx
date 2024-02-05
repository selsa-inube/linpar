import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { RenderCategoryGrid, renderCategoryGridProps } from ".";
import { inube } from "@inube/design-system";
import React, { useState } from "react";

const story = {
  component: [RenderCategoryGrid],
  title: "layouts/RenderCategoryGrid",
  decorators: [(Story: StoryFn) => <Story />],
};

const DynamicThemeWrapper = ({ children }: any) => {
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

export const Default = (args: renderCategoryGridProps) => (
  <DynamicThemeWrapper>
    <RenderCategoryGrid {...args} />
  </DynamicThemeWrapper>
);

Default.args = {
  categories: inube.color.palette.neutral,
  type: "colorPicker",
  templateRows: "repeat(10, 1fr)",
  templateColumns: "repeat(3, 1fr)",
  toggleActive: false,
  setToggleActive: (props: boolean) => {},
};
export default story;
