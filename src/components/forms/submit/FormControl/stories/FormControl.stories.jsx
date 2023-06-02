import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { FormControl } from "..";

const story = {
  components: [FormControl],
  title: "components/forms/submit/FormControl",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <FormControl {...args} />;

const handleCancel = () => {
  action("Form cancel: ")();
};

const handleSubmit = () => {
  action("Form submited: ")();
};

const ChildrenTemplate = <div>Form template</div>;

export const Default = Template.bind({});
Default.args = {
  children: ChildrenTemplate,
  handleSubmit,
  handleCancel,
};

export const disabledButtons = Template.bind({});
disabledButtons.args = {
  children: ChildrenTemplate,
  disabledButtons: true,
  handleSubmit,
  handleCancel,
};

export const loadingSave = Template.bind({});
loadingSave.args = {
  children: ChildrenTemplate,
  isLoading: true,
  handleSubmit,
  handleCancel,
};

export const withoutSubmit = Template.bind({});
withoutSubmit.args = {
  children: ChildrenTemplate,
};

export default story;
