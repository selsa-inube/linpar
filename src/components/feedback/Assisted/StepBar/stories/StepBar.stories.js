import { StepBar } from "..";
import { StyledContainer } from "./styles";

const story = {
  component: [StepBar],
  title: "components/feedback/Assisted/StepBar",
};

const withLayout = (Template) => (args) =>
  (
    <StyledContainer>
      <Template {...args} />
    </StyledContainer>
  );

const Template = (args) => <StepBar {...args} />;

export const Default = withLayout(Template.bind({}));
Default.args = {
  id: 1,
  isActualStep: false,
  isActive: false,
  isVerification: false,
};

export const isActualStep = withLayout(Template.bind({}));
isActualStep.args = {
  id: 1,
  isActualStep: true,
};

export const isActive = withLayout(Template.bind({}));
isActive.args = {
  id: 1,
  isActive: true,
};

export default story;
