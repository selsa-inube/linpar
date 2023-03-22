import { CheckingCredentials } from "./index";

const story = {
  components: [CheckingCredentials],
  title: "layouts/login/CheckingCredentials",
  parameters: {
    layout: "centered",
  },
};

const Default = () => <CheckingCredentials />;

export { Default };
export default story;
