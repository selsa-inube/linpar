import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack } from "@inube/design-system";
import { RenderFormFonts } from ".";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { TokenContext } from "@context/TokenContext";

const story = {
  components: [RenderFormFonts],
  title: "layouts/people/outlets/typography/fonts/form/RenderFormFonts",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => {
  return (
    <Stack padding="s300" direction="column">
      <TokenContext.Provider
        value={{
          tokenWithRef: presente,
          handleSubmit: () => {},
          loading: false,
        }}
      >
        <RenderFormFonts />
      </TokenContext.Provider>
    </Stack>
  );
};

export default story;

export { Default };
