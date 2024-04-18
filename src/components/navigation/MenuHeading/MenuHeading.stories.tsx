import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MenuHeading, MenuHeadingProps } from ".";

const meta: Meta<typeof MenuHeading> = {
  title: "components/data/MenuHeading",
  component: MenuHeading,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = (args: MenuHeadingProps) => <MenuHeading {...args} />;
Default.args = {
  title: "Title",
};

export default meta;
