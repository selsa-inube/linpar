import React from "react";
import { AppMenuCard } from "./index";
import { mockApps } from "../../../mocks/home/apps.mock";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [AppMenuCard],
  title: "components/cards/AppMenuCard",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args) => <AppMenuCard {...args} />;
Default.args = {
  icon: mockApps[0].icon,
  label: "users",
  description: "invite, edit, activate and delete Linix users",
  url: "/",
};

export default story;

export { Default };
