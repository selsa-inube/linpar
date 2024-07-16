import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import { InitializerForm, IInitializerForm } from "./index";

const meta: Meta<typeof InitializerForm> = {
  component: InitializerForm,
  title: "forms/edit-user/InitializerForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IInitializerForm> = (args) => (
  <InitializerForm {...args} />
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

export default meta;
