import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { DecisionModal, DecisionModalProps } from "..";
import { props } from "./props";

const story: Meta<typeof DecisionModal> = {
  component: DecisionModal,
  argTypes: props,
  title: "components/feedback/DecisionModal",
};

const Template: StoryFn<DecisionModalProps> = (args) => (
  <DecisionModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Text title",
  description: "Text description",
  actionText: "Text Action",
  closeModal: action("DecisionModal closed"),
  handleClick: action("DecisionModal action"),
  appearance: "primary",
};

export const Error = Template.bind({});
Error.args = {
  title: "Text title",
  description: "Text description",
  actionText: "Text Action",
  closeModal: action("DecisionModal closed"),
  handleClick: action("DecisionModal action"),
  appearance: "primary",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Text title",
  description: "Text description",
  actionText: "Text Action",
  closeModal: action("DecisionModal closed"),
  handleClick: action("DecisionModal action"),
  appearance: "error",
};

export default story;
