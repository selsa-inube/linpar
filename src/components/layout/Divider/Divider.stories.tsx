import { Meta } from "@storybook/react";
import { Divider, IDividerProps } from ".";

const meta: Meta<IDividerProps> = {
  title: "layouts/Divider",
  component: Divider,
};

export const Default = (args: IDividerProps) => <Divider {...args} />;
Default.args = {
  dashed: true,
};

export default meta;
