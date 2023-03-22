import { CheckingCredentials } from "./index";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [CheckingCredentials],
  title: "layouts/login/CheckingCredentials",
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

const Default = () => <CheckingCredentials />;

export { Default };
export default story;
