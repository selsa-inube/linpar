import { Meta } from "@storybook/react";
import { BoxAttribute, IBoxAttributeProps } from ".";

const meta: Meta<IBoxAttributeProps> = {
  title: "data/BoxAttribute",
  component: BoxAttribute,
};

export const Default = (args: IBoxAttributeProps) => <BoxAttribute {...args} />;
Default.args = {
  attribute: "Nombre del casi de uso",
  value: "Créditos aprobados",
};

export default meta;
