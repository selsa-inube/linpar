import { CheckingCredentials } from "./index";

const story = {
  components: [CheckingCredentials],
  title: "layouts/login/outlets/checking-credentials",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => <CheckingCredentials />;

export { Default };
export default story;
