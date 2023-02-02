import { Spinner } from "../Spinner";

const story = {
  component: [Spinner],
  title: "components/feedback/Spinner",
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default story;
