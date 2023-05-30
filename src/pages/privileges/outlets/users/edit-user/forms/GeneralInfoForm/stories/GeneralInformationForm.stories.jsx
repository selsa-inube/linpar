import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GeneralInformationForm } from "../index";
import { action } from "@storybook/addon-actions";
import { userData } from "@mocks/apps/privileges/GeneralInformationForm.mock";

const story = {
  component: GeneralInformationForm,
  title:
    "layouts/privileges/outlets/users/edit-user/forms/GeneralInformationForm",
  parameters: {
    layout: "fullscreen",
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

const handleChange = (data) => {
  const actionData = {};
  let info = "";

  Object.entries(data).forEach(([fieldName, { value, state }]) => {
    actionData[fieldName] = { value, state };
    info += `${fieldName}: ${value} - ${state}\n`;
  });

  action("handleChange")(info);
};

const Default = (args) => <GeneralInformationForm {...args} />;
Default.args = {
  allowSubmit: true,
  userData: {
    id: "",
    name: "",
    identification: "",
    email: "",
    number: "",
    rol: "",
  },
  handleChange: handleChange,
};

const WithData = (args) => <GeneralInformationForm {...args} />;
WithData.args = {
  allowSubmit: true,
  userData: {
    id: userData.id,
    name: userData.name,
    identification: userData.identification,
    email: userData.email,
    number: userData.number,
    rol: userData.rol,
  },
  handleChange: handleChange,
};

export default story;

export { Default, WithData };
