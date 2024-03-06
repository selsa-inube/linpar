import { Meta } from "@storybook/react";
import { BoxAttribute, IBoxAttributeProps } from ".";

const meta: Meta<typeof BoxAttribute> = {
  title: "components/data/BoxAttribute",
  component: BoxAttribute,
};

export const Default = (args: IBoxAttributeProps) => <BoxAttribute {...args} />;
Default.args = {
  attribute: "Nombre del caso de uso",
  value: "Créditos aprobados",
};

export default meta;
