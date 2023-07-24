import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { EventsForm, EventsFormProps } from "./index";
import { eventsFormEditUser } from "@mocks/apps/privileges/users/eventsForm.mock";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { StoryFn } from "@storybook/react";

const story = {
  components: [EventsForm],
  title: "forms/edit-user/EventsForm",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<EventsFormProps> = (args) => <EventsForm {...args} />;

const handleSubmit = (newEvents: IAssignmentFormEntry[]) => {
  action("Submit Events: ")(newEvents);
};

export const Default = Template.bind({});
Default.args = {
  currentEvents: eventsFormEditUser,
  handleSubmit,
  withSubmitButtons: true,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  currentEvents: eventsFormEditUser,
  handleSubmit,
  withSubmitButtons: false,
};

export default story;
