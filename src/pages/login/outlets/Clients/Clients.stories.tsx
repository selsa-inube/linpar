import { Clients } from "./index";

interface Story {
  components: React.ComponentType[];
  title: string;
  parameters: {
    layout: string;
  };
}

const story: Story = {
  components: [Clients],
  title: "layouts/login/outlets/clients",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = (): JSX.Element => <Clients />;

export default story;

export { Default };
