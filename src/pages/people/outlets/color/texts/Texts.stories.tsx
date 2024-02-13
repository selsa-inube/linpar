import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Texts } from ".";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@inube/design-system";

const story = {
  components: [Texts],
  title: "layouts/people/outlets/color/texts",
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

const Default = () => <Texts />;

export default story;
export { Default };
