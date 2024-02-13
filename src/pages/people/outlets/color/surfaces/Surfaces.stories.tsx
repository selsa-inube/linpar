import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Surfaces } from "./index";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@inube/design-system";

const story = {
  components: [Surfaces],
  title: "layouts/people/outlets/color/surfaces",
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

const Default = () => <Surfaces />;

export default story;

export { Default };
