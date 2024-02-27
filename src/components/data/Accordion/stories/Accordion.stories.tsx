//import { BoxAttribute } from "@components/cards/BoxAttribute";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import {
  ControllerAccordion,
  IControllerAccordionProps,
} from "./ControllerAccordion";
import { Accordion } from "..";

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

export type MockDataSummaryPage = typeof mockDataSummaryPage;

const mockDataSummaryPage = [
  {
    section: "Información general",
    attributes: [
      {
        attribute: "Nombre del casi de uso",
        value: "Créditos aprobados",
      },
      {
        attribute: "Descripción",
        value: "Aregentina",
      },
      {
        attribute: "Opción cliente servidor",
        value: "81544670",
      },
      {
        attribute: "Opción web",
        value: "20/Nov/2001",
      },
    ],
  },
  {
    section: "Cliente servidor",
    attributes: [
      {
        attribute: "Seleccione cliente servidor",
        value: "Colombia",
      },
    ],
  },
];

export const Default = (args: IControllerAccordionProps) => (
  <ControllerAccordion {...args} />
);
Default.args = {
  steps: mockDataSummaryPage,
};

export default story;
