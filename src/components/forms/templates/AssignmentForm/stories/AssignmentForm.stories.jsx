import { branchesFormEditUser } from "@mocks/apps/privileges/branchesForm.mock";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { AssignmentForm } from "..";

const story = {
  components: [AssignmentForm],
  title: "components/forms/templates/AssignmentForm",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <AssignmentForm {...args} />;

const handleChange = (newEntries) => {
  action("Form template changes: ")(newEntries);
};

export const Default = Template.bind({});
Default.args = {
  handleChange,
  entries: branchesFormEditUser,
  title: "Sucursales",
};

export default story;
