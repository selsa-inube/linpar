import { BrowserRouter } from "react-router-dom";
import { CheckingCredentials } from "./index";

const story = {
  components: [CheckingCredentials],
  title: "layouts/login/outlets/checking-credentials",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <CheckingCredentials />;

export { Default };
export default story;
