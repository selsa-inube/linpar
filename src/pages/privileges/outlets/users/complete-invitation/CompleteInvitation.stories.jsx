import { CompleteInvitation } from "./index";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [CompleteInvitation],
  title: "pages/privileges/outlets/users/complete-invitation",
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

const Default = () => <CompleteInvitation />;

export default story;

export { Default };
