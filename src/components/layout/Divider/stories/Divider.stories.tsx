import { Meta, StoryObj } from "@storybook/react";

import { props } from "./props";
import { Divider, DividerProps } from "..";

const meta: Meta<typeof Divider> = {
  title: "components/layouts/Divider",
  component: Divider,
  argTypes: props,
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = (args: DividerProps) => <Divider {...args} />;
Default.args = {
  dashed: true,
};

export default meta;
