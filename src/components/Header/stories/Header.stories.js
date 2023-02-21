import { Header } from "..";
import linparLogo from "../../../assets/images/linpar.png";
import { BrowserRouter } from "react-router-dom";
import { Controller } from "./HeaderController";

const story = {
  components: [Header],
  title: "components/Header",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args) => {
  return <Controller {...args} />;
};

Default.args = {
  username: "Leonardo Garzón",
  businessName: "Fondoccidente",
  appLogo: linparLogo,
  appLogoAlt: "Linpar",
};

export default story;

export { Default };
