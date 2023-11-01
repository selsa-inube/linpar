import { branchesFormInvitation } from "@src/mocks/apps/privileges/invitations/branchesForm.mock";
import { BranchesForm } from "@src/pages/privileges/outlets/users/edit-user/forms/BranchesForm";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Accordion, IAccordionProps } from "..";

const story = {
  component: [Accordion],
  title: "components/data/Accordion",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IAccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Branches",
  children: (
    <BranchesForm
      currentBranches={branchesFormInvitation}
      handleSubmit={() => {}}
      readOnly
    />
  ),
};

export default story;
