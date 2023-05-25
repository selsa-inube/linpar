import { BrowserRouter } from "react-router-dom";
import { EditUser } from "./index";

const story = {
  components: [EditUser],
  title: "layouts/privileges/outlets/users/edit-user",
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

const Default = () => <EditUser />;

export default story;

export { Default };
