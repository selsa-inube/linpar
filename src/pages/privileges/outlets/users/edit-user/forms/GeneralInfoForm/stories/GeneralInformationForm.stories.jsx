import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GeneralInformationForm } from "../index";
import { action } from "@storybook/addon-actions";
import { editUserData } from "@mocks/apps/privileges/users.mock";

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
  allowSubmit: true,
  userData: {
    id: editUserData.id,
    name: editUserData.name,
    identification: editUserData.identification,
    email: editUserData.email,
    phone: editUserData.phone,
    rol: editUserData.rol,
  },
  handleChange: handleChange,
};

export default story;

export { Default };
