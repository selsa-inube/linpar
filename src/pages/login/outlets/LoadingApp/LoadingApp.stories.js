import { LoadingApp } from "./index";

const story = {
  components: [LoadingApp],
  title: "Layouts/login/LoadingApp",
  parameters: {
    layout: "centered",
  },
};

const Default = () => <LoadingApp />;

export default story;

export { Default };
