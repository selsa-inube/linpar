import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { ErrorInvitationExpired } from ".";

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

const Template: StoryFn<any> = (args) => <ErrorInvitationExpired {...args} />;

export const Default = Template.bind({});
Default.args = {
  bussinessData: businessUnitDataMock[0],
};

export const WithoutClient = Template.bind({});

export default story;
