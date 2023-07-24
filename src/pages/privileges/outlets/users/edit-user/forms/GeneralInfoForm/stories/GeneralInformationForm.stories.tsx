import { BrowserRouter } from "react-router-dom";
import { GeneralInformationForm, GeneralInformationFormProps } from "../index";
import { action } from "@storybook/addon-actions";
import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";
import { IGeneralInformationEntry } from "../../../../types/forms.types";
import { StoryFn } from "@storybook/react";

const story = {
  component: GeneralInformationForm,
  title: "forms/edit-user/GeneralInformationForm",
  parameters: {
    actions: { onSubmit: "handleSubmit" },
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<GeneralInformationFormProps> = (args) => (
  <GeneralInformationForm {...args} />
);

const handleSubmit = (values: IGeneralInformationEntry) => {
  action("handleSubmit")(values);
};

export const Default = Template.bind({});
Default.args = {
  withSubmitButtons: true,
  currentInformation: {
    id: userEntriesDataMock[0].id,
    username: userEntriesDataMock[0].username,
    userID: userEntriesDataMock[0].userID,
    email: userEntriesDataMock[0].email,
    phone: userEntriesDataMock[0].phone,
    position: userEntriesDataMock[0].position,
  },
  handleSubmit: handleSubmit,
};

export const WithoutSubmitButtons = Template.bind({});
WithoutSubmitButtons.args = {
  withSubmitButtons: false,
  currentInformation: {
    id: userEntriesDataMock[0].id,
    username: userEntriesDataMock[0].username,
    userID: userEntriesDataMock[0].userID,
    email: userEntriesDataMock[0].email,
    phone: userEntriesDataMock[0].phone,
    position: userEntriesDataMock[0].position,
  },
  handleSubmit: handleSubmit,
};

export default story;
