import { StoryFn, Meta } from "@storybook/react";
import { Item } from ".";

const story: Meta<typeof Item> = {
  component: Item,
  title: "components/inputs/Item",
  decorators: [
    (Story) => <Story />,
    () => <Item id="123" name="Example Item" />,
  ],
};

const Template: StoryFn<typeof Item> = (args) => <Item {...args} />;

export const Default = Template.bind({});

export default story;
