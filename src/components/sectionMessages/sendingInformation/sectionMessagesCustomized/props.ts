import { inube } from "@shared/tokens";

const appearances = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
] as const;

export type Appearance = typeof appearances[number];

const parameters = {
  docs: {
    description: {
      component:
        "Section messages communicate important information in a section of a screen. Section messages are persistent, but can disappear when the user takes action or resolves the situation.",
    },
  },
};

const props = {
  icon: {
    control: { type: "element" },
    description: "The icon to be displayed in the section message.",
  },
  title: {
    control: { type: "text" },
    description: "The title text of the section message.",
  },
  description: {
    control: { type: "text", maxLength: 240 },
    description:
      "The description text of the section message. If the description is too long, it will be truncated to the MAX_DESCRIPTION_LENGTH.",
  },
  appearance: {
    options: Object.keys(inube.color.surface),
    control: { type: "select" },
    description:
      "The appearance style of the section message and related components.",
  },
  duration: {
    control: { type: "number" },
    description:
      "The duration for which the countdown bar runs. If provided, a countdown bar will appear.",
    table: {
      type: { summary: "number (milliseconds)" },
    },
  },
  closeSectionMessage: {
    control: { type: "action" },
    description:
      "Callback function that is called when the section message needs to be closed, either by user action or after the countdown.",
  },
};

export { props, parameters };
