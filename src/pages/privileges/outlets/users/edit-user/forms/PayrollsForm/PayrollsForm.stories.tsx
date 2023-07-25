import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { PayrollsForm, PayrollsFormProps } from "./index";
import { payrollsFormEditUser } from "@mocks/apps/privileges/users/payrollsForm.mock";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { StoryFn } from "@storybook/react";

const story = {
  components: [PayrollsForm],
  title: "forms/edit-user/PayrollsForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<PayrollsFormProps> = (args) => (
  <PayrollsForm {...args} />
);

const handleSubmit = (newPayrolls: IAssignmentFormEntry[]) => {
  action("Submit Payrolls: ")(newPayrolls);
};

export const Default = Template.bind({});
Default.args = {
  currentPayrolls: payrollsFormEditUser,
  handleSubmit,
  withSubmitButtons: true,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  currentPayrolls: payrollsFormEditUser,
  handleSubmit,
  withSubmitButtons: false,
};

export default story;
