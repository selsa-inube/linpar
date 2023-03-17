import { Invite } from "./index";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [Invite],
  title: "layouts/privileges/users/invite",
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

const Default = () => <Invite />;

export default story;

export { Default };
