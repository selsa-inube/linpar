import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import { FieldsetColorCard, FieldsetColorCardProps } from ".";

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

const Template: StoryFn<FieldsetColorCardProps> = (args) => (
  <FieldsetColorCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Regular",
  description:
    "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
  tokenName: "B400",
  tokenDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
};

export default story;
