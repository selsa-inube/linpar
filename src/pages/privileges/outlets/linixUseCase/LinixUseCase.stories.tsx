import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "@context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { LinixUseCase } from ".";

const story: Meta<typeof LinixUseCase> = {
  component: LinixUseCase,
  title: "layouts/privileges/outlets/linixUseCase",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <TokenContext.Provider
          value={{
            tokenWithRef: presente,
            handleSubmit: () => {},
            loading: false,
          }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = () => <LinixUseCase />;

export default story;

export { Default };
