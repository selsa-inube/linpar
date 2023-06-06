import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { EventsForm } from "./index";
import { eventsFormEditUser } from "@mocks/apps/privileges/eventsForm.mock";

const story = {
  components: [EventsForm],
  title: "forms/edit-user/EventsForm",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <EventsForm {...args} />;

const handleSubmit = (newAidEvents) => {
  action("Submit Events: ")(newAidEvents);
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
