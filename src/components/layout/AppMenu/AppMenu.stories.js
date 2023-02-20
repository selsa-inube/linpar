import React from "react";
import { AppMenu } from "./index";
import { mockApps } from "../../../mocks/home/apps.mock";
import { mockPrivilegeOptions } from "../../../mocks/apps/privileges.mock";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [AppMenu],
  title: "layouts/AppMenu",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Privileges = (args) => <AppMenu {...args} />;
Privileges.args = {
  appName: mockApps[0].label,
  appDescription: mockApps[0].description,
  appIcon: mockApps[0].icon,
  appOptions: mockPrivilegeOptions,
};

export default story;

export { Privileges };
