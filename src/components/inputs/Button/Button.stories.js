import { Button } from "../Button";
import { MdPersonAddAlt } from "react-icons/md";

const story = {
  components: [Button],
  title: "components/inputs/Button",
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  children: "Invite User",
  iconBefore: <MdPersonAddAlt size={18} />,
};

export const Compact = () => <Button />;

export default story;
