import { StoryFn } from "@storybook/react";
import { DecisionModal, DecisionModalProps } from ".";
import { action } from "@storybook/addon-actions";

const story = {
  component: [DecisionModal],
  title: "components/feedback/DecisionModal",
};

const Template: StoryFn<DecisionModalProps> = (args) => (
  <DecisionModal {...args} />
);

const closeDecisionModal = () => {
  action("DecisionModal closed")();
};

export const Default = Template.bind({});
Default.args = {
  title: "Text title",
  description: "Text description",
  actionText: "Text Action",
  closeModal: closeDecisionModal,
  handleClick: () => {},
};

export default story;
