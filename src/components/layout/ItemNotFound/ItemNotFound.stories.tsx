import userNotFound from "@assets/images/ItemNotFound.png";
import { BrowserRouter } from "react-router-dom";
import { ItemNotFound, ItemNotFoundProps } from "./index";
import { StoryFn } from "@storybook/react";

const story = {
  components: [ItemNotFound],
  title: "layouts/ItemNotFound",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: ItemNotFoundProps) => <ItemNotFound {...args} />;

Default.args = {
  image: userNotFound,
  title: "ItemNotFound title",
  description: "ItemNotFound description",
  buttonDescription: "buttonDescription",
  route: "path/",
};

export default story;

export { Default };
