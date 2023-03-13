import { Invite } from "./index";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [Invite],
  title: "layouts/Invite",
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
