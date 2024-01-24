import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { inube } from "@inube/design-system";
import { FieldsetColorCard, FieldsetColorCardProps } from ".";
import { useState } from "react";
import React from "react";
import { Appearance } from "./types";
import { getTokenColor } from "../TokenColorCard/styles";

const story = {
  component: [FieldsetColorCard],
  title: "components/cards/FieldsetColorCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const FieldsetColorCardWrapper = ({
  children,
  appearance,
  category,
  initialPalette,
}: {
  children: React.ReactNode;
  appearance: Appearance;
  category: string;
  initialPalette: typeof inube.color.palette;
}) => {
  const [textConfig, setTextConfig] = useState(inube.color.text);
  const handleTokenChange = (updatedTokenName: string) => {
    const updatedTextConfig = { ...textConfig };
    if (
      updatedTextConfig[appearance] &&
      updatedTextConfig[appearance][category]
    ) {
      updatedTextConfig[appearance][category] = getTokenColor(updatedTokenName);
    }
    setTextConfig(updatedTextConfig);
  };

  return React.cloneElement(children as React.ReactElement<any>, {
    appearance,
    category,
    initialPalette,
    onChange: handleTokenChange,
  });
};

const Template: StoryFn<FieldsetColorCardProps> = (args) => (
  <FieldsetColorCardWrapper
    appearance={args.appearance}
    category={args.category}
    initialPalette={inube.color.palette}
  >
    <FieldsetColorCard {...args} />
  </FieldsetColorCardWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: "Regular",
  description:
    "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
  textWithColorToken:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
  typeToken: "text",
  appearance: "primary",
  category: "hover",
  optionsMenu: inube.color.palette,
};

export default story;
