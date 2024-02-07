import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Fonts } from "./index";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@inube/design-system";

const story = {
  components: [Fonts],
  title: "layouts/people/outlets/fonts",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <TokenContext.Provider
          value={{ token: presente, handleSubmit: () => {} }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Fonts />;

export default story;

export { Default };
