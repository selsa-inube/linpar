import { Clients } from "./index";

const story = {
  components: [Clients],
  title: "Layouts/login/Clients",
  parameters: {
    layout: "fullscreen",
  },
};

const Default = () => <Clients />;

export default story;

export { Default };
