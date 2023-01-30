import { AppCard } from "../AppCard";
import { MdVpnKey } from "react-icons/md";

const story = {
  component: [AppCard],
  title: "components/AppCard",
};

const Template = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Privilegios",
  description: "Modifica las propiedades y permisos de tu cuenta",
  icon: <MdVpnKey />,
};

export default story;
