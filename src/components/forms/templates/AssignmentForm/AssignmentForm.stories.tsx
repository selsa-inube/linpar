import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";
import { branchesFormEditUser } from "@mocks/apps/privileges/users/branchesForm.mock";
import { IEntry } from "./types";
import { AssignmentForm, AssignmentFormProps } from ".";

const story = {
  components: [AssignmentForm],
  title: "components/forms/templates/AssignmentForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<AssignmentFormProps> = (args) => (
  <AssignmentForm {...args} />
);

const handleChange = (newEntries: IEntry[]) => {
  action("Form template changes: ")(newEntries);
};

export const Default = Template.bind({});
Default.args = {
  handleChange,
  entries: branchesFormEditUser,
  title: "Sucursales",
};

export default story;
