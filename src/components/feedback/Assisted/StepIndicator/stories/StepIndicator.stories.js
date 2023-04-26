import { StepIndicator } from "../../StepIndicator";

const story = {
  component: [StepIndicator],
  title: "components/feedback/Assisted/StepIndicator",
};

const Template = (args) => <StepIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  stepName: "Text",
  stepNumber: 1,
  actualStep: 0,
  isVerification: false,
};

//isActualStep: if stepNumber equals actualStep

export const isActualStep = Template.bind({});
isActualStep.args = {
  stepName: "Text",
  stepNumber: 2,
  actualStep: 2,
  isVerification: false,
};

//isPreviousStep: if the stepNumber is less than actualStep

export const isPreviousStep = Template.bind({});
isPreviousStep.args = {
  stepName: "Text",
  stepNumber: 3,
  actualStep: 4,
  isVerification: false,
};

export const isVerification = Template.bind({});
isVerification.args = {
  stepName: "Text",
  stepNumber: 4,
  actualStep: 0,
  isVerification: true,
};

export default story;
