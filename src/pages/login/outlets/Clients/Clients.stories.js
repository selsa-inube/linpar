import { Clients } from "./index";

const story = {
  components: [Clients],
  title: "layouts/login/outlets/clients",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => <Clients />;

export default story;

export { Default };
