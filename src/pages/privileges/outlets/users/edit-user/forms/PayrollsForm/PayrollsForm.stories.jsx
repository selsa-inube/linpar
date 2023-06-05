import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { PayrollsForm } from "./index";
import { payrollsFormEditUser } from "@mocks/apps/privileges/payrollsForm.mock";

const story = {
  components: [PayrollsForm],
  title: "forms/edit-user/PayrollsForm",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <PayrollsForm {...args} />;

const handleSubmit = (newAidPayrolls) => {
  action("Submit Payrolls: ")(newAidPayrolls);
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
