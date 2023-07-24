import { projectsFormEditUser } from "@mocks/apps/privileges/users/projectsForm.mock";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { ProjectsForm, ProjectsFormProps } from "./index";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { StoryFn } from "@storybook/react";

const story = {
  components: [ProjectsForm],
  title: "forms/edit-user/ProjectsForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<ProjectsFormProps> = (args) => (
  <ProjectsForm {...args} />
);

const handleSubmit = (newProjects: IAssignmentFormEntry[]) => {
  action("Submit projects: ")(newProjects);
};

export const Default = Template.bind({});
Default.args = {
  currentProjects: projectsFormEditUser,
  handleSubmit,
  withSubmitButtons: true,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  currentProjects: projectsFormEditUser,
  handleSubmit,
  withSubmitButtons: false,
};

export default story;
