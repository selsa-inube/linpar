import { BrowserRouter } from "react-router-dom";
import { GeneralInformationForm } from "../index";
import { action } from "@storybook/addon-actions";
import { userEntriesDataMock } from "@mocks/apps/privileges/users.mock";

const story = {
  component: GeneralInformationForm,
  title: "forms/edit-user/GeneralInformationForm",
  parameters: {
    actions: { onChange: "handleChange" },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const handleChange = (values) => {
  action("handleChange")(values);
};

const Default = (args) => <GeneralInformationForm {...args} />;
Default.args = {
  withSubmitButtons: true,
  currentInformation: {
    id: userEntriesDataMock[0].id,
    name: userEntriesDataMock[0].username,
    identification: userEntriesDataMock[0].userID,
    email: userEntriesDataMock[0].email,
    phone: userEntriesDataMock[0].phone,
    position: userEntriesDataMock[0].position,
  },
  handleChange: handleChange,
};

export default story;

export { Default };
