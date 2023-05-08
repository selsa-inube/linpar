import { Breadcrumbs } from ".";
import { BrowserRouter } from "react-router-dom";

const story = {
  component: [Breadcrumbs],
  title: "components/navigation/Breadcrumbs",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  route: "Privileges/Users",
};

export default story;
