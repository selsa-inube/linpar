import { Divider, IDividerProps } from ".";

const story = {
  title: "layouts/Divider",
  component: [Divider],
};

export const Default = (args: IDividerProps) => <Divider {...args} />;
Default.args = {
  dashed: true,
};

export default story;
