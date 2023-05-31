import { branchesEditUser } from "@mocks/apps/privileges/branchesForm.mock";
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

const handleChange = (branches) => {
  action("Branches changes: ")(branches);
};

const handleSubmit = (branches) => {
  action("Branches submited: ")(branches);
};

export const Default = Template.bind({});
Default.args = {
  currentBranches: branchesEditUser,
  handleSubmit,
};

export const withoutFormSubmit = Template.bind({});
withoutFormSubmit.args = {
  currentBranches: branchesEditUser,
  handleChange,
};

export default story;
