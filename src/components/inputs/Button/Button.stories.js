import { Button } from "../Button";
import { MdPersonAddAlt } from "react-icons/md";

const story = {
  components: [Button, MdPersonAddAlt],
  title: "components/inputs/Button",
  argTypes: { handleClick: { action: "clicked" } },
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  children: "Invite User",
  iconBefore: <MdPersonAddAlt size={18} />,
};

export const Compact = (args) => <Button {...args} />;
Compact.args = {
  children: "Invite User",
  iconBefore: <MdPersonAddAlt size={18} />,
  spacing: "compact",
};

export default story;
