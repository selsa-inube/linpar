import { StoryFn } from "@storybook/react";
import { RenderCategoryGrid, renderCategoryGridProps } from "..";
import { categoryOptions, parameters, props } from "./props";
import { DynamicThemeWrapper } from "./RenderCategoryGrid.Controller";

const story = {
  component: [RenderCategoryGrid],
  title: "layouts/RenderCategoryGrid",
  decorators: [(Story: StoryFn) => <Story />],
  parameters,
  argTypes: props,
};

const adjustArgsForConditions = (args: renderCategoryGridProps) => {
  const newArgs = { ...args };
  if (args.categories === "Palette" && args.type === "colorPicker") {
    newArgs.hasTitle = true;
    newArgs.templateColumns = "1fr";
    newArgs.templateRows = "repeat(auto-fill, 1fr)";
  }
  return newArgs;
};

export const Default = (originalArgs: renderCategoryGridProps) => {
  const args = adjustArgsForConditions(originalArgs);
  return (
    <DynamicThemeWrapper>
      <RenderCategoryGrid
        {...args}
        categories={JSON.parse(
          categoryOptions[args.categories as keyof typeof categoryOptions] ||
            "{}"
        )}
      />
    </DynamicThemeWrapper>
  );
};

Default.args = {
  categories: "Neutral Palette",
  type: "colorPicker",
  templateRows: "repeat(10, 1fr)",
  templateColumns: "repeat(3, 1fr)",
};
export default story;
