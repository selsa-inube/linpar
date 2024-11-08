import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Users } from ".";

const story: Meta<typeof Users> = {
  component: Users,
  title: "layouts/privileges/outlets/users",
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

const Default = () => <Users />;

export default story;

export { Default };
