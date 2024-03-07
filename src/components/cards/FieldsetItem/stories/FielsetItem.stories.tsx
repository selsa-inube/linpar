import { StoryFn, Meta } from "@storybook/react";
import { FieldsetItem } from "..";
import { fieldsetItemProps } from "./props";

const story: Meta<typeof FieldsetItem> = {
  component: FieldsetItem,
  title: "components/cards/FieldsetItem",
};

const Template: StoryFn<typeof FieldsetItem> = (args) => (
  <FieldsetItem {...args} />
);

export const Default = Template.bind({});
Default.args = fieldsetItemProps;

export default story;
