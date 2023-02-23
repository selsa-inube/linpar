import { Tabs } from "../Tabs";

const story = {
  component: [Tabs],
  title: "components/navigation/Tabs",
};

const Default = (args) => <Tabs {...args} />;
Default.args = {
  titles: ["Usuarios", "Invitaciones"],
};

export default story;

export { Default };
