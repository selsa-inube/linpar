import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MdAndroid } from "react-icons/md";
import { MenuSection, MenuSectionProps } from ".";
import { ISection } from "./types";

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

const story = {
  title: "design/navigation/MenuSection",
  components: [MenuSection],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<MenuSectionProps> = (args) => (
  <MenuSection {...args} />
);
Default.args = {
  sections: sections,
  divider: false,
  spacing: "wide",
};

export default story;
