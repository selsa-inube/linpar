import { ItemNotFound } from "./index";
import userNotFound from "@src/assets/images/ItemNotFound.png";
import { BrowserRouter } from "react-router-dom";

const story = {
  components: [ItemNotFound],
  title: "layouts/ItemNotFound",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args) => <ItemNotFound {...args} />;
Default.args = {
  image: userNotFound,
  title: "ItemNotFound title",
  description: "ItemNotFound description",
  buttonDescription: "buttonDescription",
  route: "path/",
};

export default story;

export { Default };
