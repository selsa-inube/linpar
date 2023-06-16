import { StoryFn } from "@storybook/react";
import { Fieldset, FieldsetProps } from "..";

const story = {
  component: Fieldset,
  title: "components/inputs/Fieldset",
};

const Template: StoryFn<FieldsetProps> = (args) => <Fieldset {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "User Information",
};

export default story;
