import { Input } from "../Input";
import { MdSearch } from "react-icons/md";

const story = {
  components: [Input, MdSearch],
  title: "components/inputs/Input",
};

export const Default = (args) => <Input {...args} />;
Default.args = {
  label: "Username",
  placeholder: "Write your full name",
  isRequired: false,
  isDisabled: false,
  iconBefore: <MdSearch size={24} />,
};

export const Invalid = (args) => <Input {...args} />;
Invalid.args = {
  label: "Username",
  placeholder: "Write your full name",
  isInvalid: true,
  errorMessage: "Error Message",
};

export const Compact = (args) => <Input {...args} />;
Compact.args = {
  label: "Username",
  placeholder: "Write your full name",
  size: "compact",
};

export const Search = (args) => <Input {...args} />;
Search.args = {
  placeholder: "Search...",
  iconAfter: <MdSearch size={24} />,
};

export default story;
