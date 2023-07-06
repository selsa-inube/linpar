import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { AidBudgetsForm } from "./index";
import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";

const story = {
  components: [AidBudgetsForm],
  title: "forms/edit-user/AidBudgetsForm",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <AidBudgetsForm {...args} />;

const handleSubmit = (newAidBudgets) => {
  action("Submit AidBudgets: ")(newAidBudgets);
};

export const Default = Template.bind({});
Default.args = {
  currentAidBudgetUnits: aidBudgetsFormEditUser,
  handleSubmit,
  withSubmitButtons: true,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  currentAidBudgetUnits: aidBudgetsFormEditUser,
  handleSubmit,
  withSubmitButtons: false,
};

export default story;
