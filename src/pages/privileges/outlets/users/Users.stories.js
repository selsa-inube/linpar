import { Users } from "./index";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [Users],
  title: "layouts/privileges/outlets/users",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Users />;

export default story;

export { Default };
