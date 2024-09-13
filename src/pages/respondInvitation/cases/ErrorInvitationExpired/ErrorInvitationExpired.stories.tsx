import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ErrorInvitationExpired, ErrorInvitationExpiredProps } from "./index";
import { businessUnitDataMock } from "@src/mocks/login/businessUnit.mock";

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
  bussinessUnitsData: businessUnitDataMock[0],
};

export const WithoutBussinessUnits = Template.bind({});

export default story;
