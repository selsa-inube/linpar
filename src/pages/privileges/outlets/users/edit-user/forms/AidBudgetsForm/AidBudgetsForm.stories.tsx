import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { AidBudgetsForm, AidBudgetsFormProps } from "./index";
import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { StoryFn } from "@storybook/react";

const story = {
  components: [AidBudgetsForm],
  title: "forms/edit-user/AidBudgetsForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<AidBudgetsFormProps> = (args) => (
  <AidBudgetsForm {...args} />
);

const handleSubmit = (newAidBudgets: IAssignmentFormEntry[]) => {
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
