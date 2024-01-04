import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import { TokenColorCard, TokenColorCardProps } from ".";

const story = {
  component: [TokenColorCard],
  title: "components/cards/TokenColorCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<TokenColorCardProps> = (args) => (
  <TokenColorCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tokenName: "N900",
  tokenDescription: "Color token",
};

export default story;
