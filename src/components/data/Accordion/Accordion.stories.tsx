//import { BoxAttribute } from "@components/cards/BoxAttribute";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { MdArrowBack } from "react-icons/md";
import { Button, Stack } from "@inube/design-system";
import { BoxAttribute } from "../BoxAttirbute";
import { Accordion, IAccordionProps } from ".";

const story = {
  title: "data/Accordion",
  component: Accordion,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = (args: IAccordionProps) => (
  <Accordion {...args}>
    <BoxAttribute attribute="Attribute" value="Value" />
    <Stack justifyContent="flex-end" width="100%">
      <Button appearance="dark" variant="none" iconBefore={<MdArrowBack />}>
        Regresar a este paso
      </Button>
    </Stack>
  </Accordion>
);
Default.args = {
  title: "Title",
  children: "Content",
};

export default story;
