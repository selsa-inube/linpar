import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
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
  bussinessUnitsData: businessUnitDataMock[0],
};

export const WithoutClient = Template.bind({});

export default story;
