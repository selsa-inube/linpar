import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { TokenColorCard, ITokenColorCardProps } from ".";
import { presente, inube } from "@inube/design-system";
import React, { useState } from "react";

const story = {
  component: [TokenColorCard],
  title: "components/cards/TokenColorCard",
  decorators: [(Story: StoryFn) => <Story />],
  argTypes: {
    type: {
      options: ["colorPicker", "tokenPicker"],
      control: { type: "select" },
      description:
        "It is the type of TokenColorCard be operate if a colorPicker or as a tokenPicker",
      table: {
        defaultValue: { summary: "colorPicker" },
      },
    },
  },
};

const Template: StoryFn<ITokenColorCardProps> = (args) => (
  <TokenColorCard {...args} />
);

const theme = {
  ...presente,
};
const DynamicThemeWrapper = ({ children }: any) => {
  const [theme, setTheme] = useState({ ...inube.color.palette });
  const [selectedTokenName, setSelectedTokenName] = useState("N900");

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
      console.log("Token Name Change Detected:", tokenName);
      setSelectedTokenName(tokenName);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {React.cloneElement(children, {
        onColorChange: handleColorChange,
        tokenName: selectedTokenName,
      })}
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
  type: "tokenPicker",
  palette: inube.color.palette,
};
export default story;
