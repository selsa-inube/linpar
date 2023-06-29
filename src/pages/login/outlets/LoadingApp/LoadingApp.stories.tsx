import { LoadingApp } from "./index";

interface Story {
  components: React.ComponentType[];
  title: string;
  parameters: {
    layout: string;
  };
}

const story: Story = {
  components: [LoadingApp],
  title: "layouts/login/outlets/loading-app",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => <LoadingApp />;

export default story;

export { Default };
