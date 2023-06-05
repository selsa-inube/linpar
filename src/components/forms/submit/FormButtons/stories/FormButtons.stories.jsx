import { Fieldset } from "@components/inputs/Fieldset";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { FormButtons } from "..";
import { StyledForm } from "./stories.styles";

const story = {
  components: [FormButtons],
  title: "components/forms/submit/FormButtons",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <FormButtons {...args} />;

const handleReset = () => {
  action("Form cancel ")();
};

const handleSubmit = () => {
  action("Form submited ")();
};

const ChildrenTemplate = (
  <StyledForm>
    <Fieldset title="Form template" />
  </StyledForm>
);

export const Default = Template.bind({});
Default.args = {
  children: ChildrenTemplate,
  handleSubmit,
  handleReset,
};

export const disabledButtons = Template.bind({});
disabledButtons.args = {
  children: ChildrenTemplate,
  disabledButtons: true,
  handleSubmit,
  handleReset,
};

export const loadingSave = Template.bind({});
loadingSave.args = {
  children: ChildrenTemplate,
  isLoading: true,
  handleSubmit,
  handleReset,
};

export default story;
