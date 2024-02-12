import { StoryFn } from "@storybook/react";
import { IRenderMessageProps, RenderMessage } from ".";
import { MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

const story = {
  component: [RenderMessage],
  title: "layouts/RenderMessage",
  decorators: [(Story: StoryFn) => <Story />],
};

export const Default = (args: IRenderMessageProps) => (
  <RenderMessage {...args} />
);

Default.args = {
  message: {
    visible: true,
    data: {
      id: 1,
      icon: <MdThumbUpOffAlt size={18} />,
      title: "Actualizacion de paleta exitosa",
      description: `La paleta de colores ha sido actualizada con exito`,
      appearance: EAppearance.SUCCESS,
    },
  },
  handleCloseMessage: () => {},
  handleReset: () => {},
};
export default story;
