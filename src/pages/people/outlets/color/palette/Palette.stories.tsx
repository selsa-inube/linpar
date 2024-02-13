import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Palette } from "./index";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@inube/design-system";

const story = {
  components: [Palette],
  title: "layouts/people/outlets/color/palette",
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

const Default = () => <Palette />;

export default story;

export { Default };
