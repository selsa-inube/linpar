//import { BoxAttribute } from "@components/cards/BoxAttribute";
import { StoryFn } from "@storybook/react";
//import { BrowserRouter } from "react-router-dom";
import { Accordion, IAccordionProps } from ".";

const story = {
  component: [Accordion],
  title: "design/data/Accordion",
};

const Template: StoryFn<IAccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Accordion",
};

export default story;
