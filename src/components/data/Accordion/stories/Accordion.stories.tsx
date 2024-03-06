import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import {
  ControllerAccordion,
  IControllerAccordionProps,
} from "./ControllerAccordion";

import { parameters, props } from "./props";
import { Accordion, IAccordionProps } from "..";

const meta: Meta<typeof Accordion> = {
  title: "components/data/Accordion",
  component: Accordion,
  parameters,
  argTypes: props,

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
        attribute: "Nombre del caso de uso",
        value: "Créditos aprobados",
      },
      {
        attribute: "Descripción",
        value: "Argentina",
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
    attributesButton: {
      text: "Regresar a este paso",
      path: "/",
    },
  },
  {
    section: "Cliente servidor",
    attributes: [
      {
        attribute: "Seleccione cliente servidor",
        value: "Colombia",
      },
    ],
    attributesButton: {
      text: "Regresar a este paso",
      path: "/",
    },
  },
];

export const Default = (args: IAccordionProps) => <Accordion {...args} />;
Default.args = {
  title: "Casos de uso",
};

export const ExampleSummaryPage = (args: IControllerAccordionProps) => (
  <ControllerAccordion {...args} />
);
ExampleSummaryPage.args = {
  steps: mockDataSummaryPage,
};

export default meta;
