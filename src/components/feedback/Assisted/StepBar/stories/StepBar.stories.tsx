import { StoryFn } from "@storybook/react";
import { StepBar } from "..";
import { StepBarProps } from "../index";
import { Stack } from "@inube/design-system";

const story = {
  component: [StepBar],
  title: "components/feedback/Assisted/StepBar",
  decorators: [
    (Story: StoryFn) => (
      <Stack>
        <Story />
      </Stack>
    ),
  ],
};

const Template: StoryFn<StepBarProps> = (args) => <StepBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  stepNumber: 2,
  actualStep: 1,
};

export const isPreviousStep = Template.bind({});
isPreviousStep.args = {
  stepNumber: 2,
  actualStep: 2,
};

export default story;
