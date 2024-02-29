import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { InitialiserForm, IInitialiserForm } from "./index";
import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { StoryFn } from "@storybook/react";

const story = {
  components: [InitialiserForm],
  title: "forms/edit-user/AidBudgetsForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IInitialiserForm> = (args) => (
  <InitialiserForm {...args} />
);

const handleSubmit = (newAidBudgets: IAssignmentFormEntry[]) => {
  action("Submit AidBudgets: ")(newAidBudgets);
};

export const Default = Template.bind({});
Default.args = {
  dataOptionsForms: aidBudgetsFormEditUser,
  handleSubmit,
  withSubmitButtons: true,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  dataOptionsForms: aidBudgetsFormEditUser,
  handleSubmit,
  withSubmitButtons: false,
};

export default story;
