import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "..";
import linparLogo from "../../../assets/images/linpar.png";
import { Controller } from "./HeaderController";
import { HeaderUIProps } from "../interface";

const story = {
  components: [Header],
  title: "components/Header",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: HeaderUIProps) => {
  return <Controller {...args} />;
};

Default.args = {
  userName: "Leonardo Garzón",
  businessUnit: "Fondoccidente",
  appLogo: linparLogo,
  appLogoAlt: "Linpar",
};

export default story;

export { Default };
