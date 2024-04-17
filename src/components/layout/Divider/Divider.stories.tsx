import { Meta } from "@storybook/react";
import { props } from "./props";
import { Divider, DividerProps } from ".";

const meta: Meta<typeof Divider> = {
  title: "components/layouts/Divider",
  component: Divider,
  argTypes: props,
};

export const Default = (args: DividerProps) => <Divider {...args} />;
Default.args = {
  dashed: true,
};

export default meta;
