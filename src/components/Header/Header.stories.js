import { Header } from "../Header";
import linparLogo from "../../assets/images/linpar.png";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { HeaderUI } from "./interface";

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

const Controller = (args) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = (event) => {
    console.log(event);
  };

  const props = { ...args, menu, handleMenu };

  return <HeaderUI {...props} />;
};

export default story;

export { Default };
