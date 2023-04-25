import { StepIndicator } from "../../StepIndicator";

const StepIndicatorStories = {
  component: StepIndicator,
  title: "components/feedback/Assisted/StepIndicator",
  argTypes: {
    options: {
      control: {
        type: "select",
        options: ["default", "actual", "active", "verification"],
      },
    },
  },
};

const Template = ({ options, ...args }) => {
  const values = {
    default: { stepNumber: 1, actualStep: 0, isVerification: false },
    actual: { stepNumber: 2, actualStep: 2, isVerification: false },
    active: { stepNumber: 3, actualStep: 4, isVerification: false },
    verification: { stepNumber: 4, actualStep: 0, isVerification: true },
  };
  const { stepNumber, actualStep, isVerification } =
    values[options] || values.default;

  return (
    <StepIndicator
      {...args}
      stepNumber={stepNumber}
      actualStep={actualStep}
      isVerification={isVerification}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  stepName: "Text",
};

export default StepIndicatorStories;
