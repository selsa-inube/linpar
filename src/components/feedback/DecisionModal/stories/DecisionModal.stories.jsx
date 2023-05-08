import { DecisionModal } from "..";
import { action } from "@storybook/addon-actions";

const story = {
  component: [DecisionModal],
  title: "components/feedback/DecisionModal",
};

const Template = (args) => <DecisionModal {...args} />;

const closeDecisionModal = () => {
  action("DecisionModal closed")();
};

export const Default = Template.bind({});
Default.args = {
  title: "Text title",
  description: "Text description",
  actionText: "Text Action",
  closeModal: closeDecisionModal,
};

export default story;
