import { DecisionModal } from "../../DecisionModal";
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
  textAction: "Text Action",
  toggleModal: closeDecisionModal,
};

export default story;
