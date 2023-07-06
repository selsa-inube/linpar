import { BrowserRouter } from "react-router-dom";
import { GeneralInformationForm } from "../index";
import { action } from "@storybook/addon-actions";
import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";

const story = {
  component: GeneralInformationForm,
  title: "forms/edit-user/GeneralInformationForm",
  parameters: {
    actions: { onSubmit: "handleSubmit" },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const handleSubmit = (values) => {
  action("handleSubmit")(values);
};

const Default = (args) => <GeneralInformationForm {...args} />;
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

export default story;

export { Default };
