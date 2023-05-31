import React from "react";
import { Fieldset } from "..";

const story = {
  component: Fieldset,
  title: "components/feedback/Fieldset",
};

const Template = (args) => <Fieldset {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "User Information",
};

export default story;
