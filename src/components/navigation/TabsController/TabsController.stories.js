import { TabsController } from "../TabsController";

const story = {
  component: [TabsController],
  title: "components/navigation/Tabs",
  argTypes: {
    handleClick: { action: "clicked" },
  },
};

const Default = (args) => <TabsController {...args} />;
Default.args = {
  tabs: [
    {
      id: "privileges-users",
      content: "users",
    },
    {
      id: "privileges-invitations",
      content: "invitations",
    },
  ],
};

export default story;

export { Default };
