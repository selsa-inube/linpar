import { BrowserRouter } from "react-router-dom";
import { MdAndroid } from "react-icons/md";
import { Meta, StoryFn } from "@storybook/react";
import { MenuSection, MenuSectionProps } from ".";
import { ISection } from "./types";

const meta: Meta<typeof MenuSection> = {
  title: "components/data/MenuSection",
  component: MenuSection,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const sections: ISection[] = [
  {
    title: "Heading 1",
    links: [
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
    ],
  },
  {
    title: "Heading 2",
    links: [
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
    ],
  },
];

export const Default = (args: MenuSectionProps) => <MenuSection {...args} />;
Default.args = {
  sections: sections,
  divider: false,
  spacing: "wide",
};

export default meta;
