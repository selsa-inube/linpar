import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ErrorNotAvailable, ErrorNotAvailableProps } from "./index";
import { businessUnitDataMock } from "@src/mocks/login/businessUnit.mock";

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
