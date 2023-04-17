import { StepIndicator } from "../../StepIndicator";

const story = {
  component: [StepIndicator],
  title: "components/feedback/Assisted/StepIndicator",
};

const Template = (args) => <StepIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  stepNumber: 0,
  stepName: "Text",
  stepActual: false,
  isActive: false,
  isVerification: false,
};

export const stepActual = Template.bind({});
stepActual.args = {
  stepNumber: 0,
  stepName: "Text",
  stepActual: true,
};

export const isActive = Template.bind({});
isActive.args = {
  stepNumber: 0,
  stepName: "Text",
  isActive: true,
};

export const isVerification = Template.bind({});
isVerification.args = {
  stepName: "Text",
  isVerification: true,
};

export default story;
