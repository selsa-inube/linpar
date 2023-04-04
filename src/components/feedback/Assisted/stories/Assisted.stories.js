import { Assisted } from "../../Assisted";

const story = {
  component: [Assisted],
  title: "components/feedback/Assisted",
};

const stepsMock = [
  {
    id: 1,
    stepName: "Name 1",
    stepDescription: "Example description 1",
  },

  {
    id: 2,
    stepName: "Name 2",
    stepDescription: "Example description 2",
  },

  {
    id: 3,
    stepName: "Name 3",
    stepDescription: "Example description 3",
  },

  {
    id: 4,
    stepName: "Name 4",
    stepDescription: "Example description 4",
  },

  {
    id: 5,
    stepName: "Name 5",
    stepDescription: "Example description 5",
  },
];

const Template = (args) => <Assisted {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: stepsMock,
  isVerification: true,
};

export default story;
