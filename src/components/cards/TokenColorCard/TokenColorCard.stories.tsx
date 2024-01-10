import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { TokenColorCard, ITokenColorCardProps } from ".";
import { presente, inube } from "@inube/design-system";
import React, { useState } from "react";

const story = {
  component: [TokenColorCard],
  title: "components/cards/TokenColorCard",
  decorators: [(Story: StoryFn) => <Story />],
};

const Template: StoryFn<ITokenColorCardProps> = (args) => (
  <TokenColorCard {...args} />
);

const theme = {
  ...presente,
};
const DynamicThemeWrapper = ({ children }: any) => {
  const [theme, setTheme] = useState({ ...inube.color.palette });

  const handleColorChange = (tokenName: string, newColor: string) => {
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
  };

  return (
    <ThemeProvider theme={theme}>
      {React.cloneElement(children, { onColorChange: handleColorChange })}
    </ThemeProvider>
  );
};

export const Default = (args: ITokenColorCardProps) => (
  <DynamicThemeWrapper>
    <TokenColorCard {...args} />
  </DynamicThemeWrapper>
);

Default.args = {
  tokenName: "N900",
  tokenDescription: "Color token",
};
export default story;
