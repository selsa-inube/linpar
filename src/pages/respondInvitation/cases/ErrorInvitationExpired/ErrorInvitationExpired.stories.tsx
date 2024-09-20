import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ErrorInvitationExpired, ErrorInvitationExpiredProps } from "./index";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";

const story = {
  components: [ErrorInvitationExpired],
  title: "layouts/respondInvitation/cases/ErrorInvitationExpired",
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

const Template: StoryFn<ErrorInvitationExpiredProps> = (args) => (
  <ErrorInvitationExpired {...args} />
);

export const Default = Template.bind({});
Default.args = {
  clientData: businessUnitDataMock[0],
};

export const WithoutClient = Template.bind({});

export default story;
