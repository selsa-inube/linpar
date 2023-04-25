import { StepBar } from "..";
import { StyledContainer } from "./styles";

const StepBarStories = {
  component: StepBar,
  title: "components/feedback/Assisted/StepBar",
  argTypes: {
    option: {
      control: {
        type: "select",
        options: ["default", "activeOrActual"],
      },
    },
  },
};

const withLayout = (Template) => (args) =>
  (
    <StyledContainer>
      <Template {...args} />
    </StyledContainer>
  );

const Template = ({ option, ...args }) => {
  const values = {
    default: { stepNumber: 2, actualStep: 1 },
    activeOrActual: { stepNumber: 2, actualStep: 2 },
  };
  const { stepNumber, actualStep } = values[option] || values.default;

  return <StepBar {...args} stepNumber={stepNumber} actualStep={actualStep} />;
};

export const Default = withLayout(Template.bind({}));
Default.args = {};

export default StepBarStories;
