import { CompleteRegister } from "./index";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [CompleteRegister],
  title: "pages/privileges/outlets/users/complete-register",
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

const Default = () => <CompleteRegister />;

export default story;

export { Default };
