import { branchesFormEditUser } from "@mocks/apps/privileges/users/branchesForm.mock";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { BranchesForm } from "./index";

const story = {
  components: [BranchesForm],
  title: "forms/edit-user/BranchesForm",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <BranchesForm {...args} />;

const handleSubmit = (newBranches) => {
  action("Submit branches: ")(newBranches);
};

export const Default = Template.bind({});
Default.args = {
  currentBranches: branchesFormEditUser,
  handleSubmit,
  withSubmitButtons: true,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  currentBranches: branchesFormEditUser,
  handleSubmit,
  withSubmitButtons: false,
};

export default story;
