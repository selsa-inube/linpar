import { BrowserRouter } from "react-router-dom";
import { GeneralInformationForm } from "../index";

const story = {
  components: [GeneralInformationForm],
  title:
    "layouts/privileges/outlets/users/edit-user/forms/GeneralInformationForm",
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

const Default = () => <GeneralInformationForm />;

export default story;

export { Default };
