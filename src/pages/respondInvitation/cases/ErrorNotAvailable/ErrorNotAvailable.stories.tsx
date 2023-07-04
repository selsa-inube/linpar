import { clientsDataMock } from "@src/mocks/login/clients.mock";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ErrorNotAvailable, ErrorNotAvailableProps } from "./index";

const story = {
  components: [ErrorNotAvailable],
  title: "layouts/respondInvitation/cases/ErrorNotAvailable",
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

const Template: StoryFn<ErrorNotAvailableProps> = (args) => (
  <ErrorNotAvailable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  clientData: clientsDataMock[0],
};

export const WithoutClient = Template.bind({});

export default story;
