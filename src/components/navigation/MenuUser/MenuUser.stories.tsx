import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { MenuUser, MenuUserProps } from ".";

const meta: Meta<typeof MenuUser> = {
  title: "components/data/MenuUser",
  component: MenuUser,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof MenuUser>;

export const Default: Story = (args: MenuUserProps) => <MenuUser {...args} />;
Default.args = {
  userName: "Name",
  businessUnit: "Business Unit",
  avatar: true,
};

export default meta;
