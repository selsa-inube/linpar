import { StoryFn, Meta } from "@storybook/react";
import { FielsetItem } from "..";
import { fieldsetItemProps } from "./props";

const story: Meta<typeof FielsetItem> = {
  component: FielsetItem,
  title: "components/cards/FieldsetFielsetItem",
};

const Template: StoryFn<typeof FielsetItem> = (args) => (
  <FielsetItem {...args} />
);

export const Default = Template.bind({});
Default.args = fieldsetItemProps;

export default story;
