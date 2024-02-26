//import { BoxAttribute } from "@components/cards/BoxAttribute";
import { Accordion, IAccordionProps } from ".";

const story = {
  title: "data/Accordion",
  component: Accordion,
};

export const Default = (args: IAccordionProps) => <Accordion {...args} />;
Default.args = {
  title: "Title",
  children: "Content",
};

export default story;
