import { LoadingApp } from "./index";

const story = {
  components: [LoadingApp],
  title: "layouts/login/outlets/loading-app",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => <LoadingApp />;

export default story;

export { Default };
