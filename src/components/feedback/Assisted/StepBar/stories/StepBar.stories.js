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
  stepName: "Text",
  stepActual: false,
  isActive: false,
  isVerification: false,
};

export const stepActual = withLayout(Template.bind({}));
stepActual.args = {
  id: 1,
  stepName: "Text",
  stepActual: true,
};

export const isActive = withLayout(Template.bind({}));
isActive.args = {
  id: 1,
  stepName: "Text",
  isActive: true,
};

export default story;
