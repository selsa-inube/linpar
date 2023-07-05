import { StoryFn } from "@storybook/react";
import { StepIndicator } from "..";
import { IStepIndicatorProps } from "../types";

const story = {
  component: [StepIndicator],
  title: "components/feedback/Assisted/StepIndicator",
};

const Template: StoryFn<IStepIndicatorProps> = (args) => (
  <StepIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stepName: "Step 1",
  stepNumber: 1,
  actualStep: 0,
  isVerification: false,
};

//isActualStep: if stepNumber equals actualStep

export const isActualStep = Template.bind({});
isActualStep.args = {
  stepName: "Step 2",
  stepNumber: 2,
  actualStep: 2,
  isVerification: false,
};

//isPreviousStep: if the stepNumber is less than actualStep

export const isPreviousStep = Template.bind({});
isPreviousStep.args = {
  stepName: "Step 3",
  stepNumber: 3,
  actualStep: 4,
  isVerification: false,
};

export const isVerification = Template.bind({});
isVerification.args = {
  stepName: "Step 4",
  stepNumber: 4,
  actualStep: 0,
  isVerification: true,
};

export default story;
