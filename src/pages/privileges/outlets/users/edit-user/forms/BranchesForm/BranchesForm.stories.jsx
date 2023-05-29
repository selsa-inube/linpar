import { branchesEditUser } from "@mocks/apps/privileges/branchesForm.mock";
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

export const Default = Template.bind({});
Default.args = {
  allowSubmit: true,
  currentBranches: branchesEditUser,
};

export default story;
