import React from "react";
import { Home } from "./index";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "../../context/index";

const story = {
  title: "layouts/Home",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
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
