import { Home } from "./index";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "@context/AppContext/index";

const story = {
  title: "layouts/Home",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <AppContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </AppContextProvider>
    ),
  ],
};

const Default = () => <Home />;

export { Default };
export default story;
