import { BrowserRouter } from "react-router-dom";
import {
  MdModeEdit,
  MdOutlineAssignmentTurnedIn,
  MdOutlineDelete,
} from "react-icons/md";
import { StoryFn, Meta } from "@storybook/react";
import { DecisionModalActions, AppCardProps } from ".";

const meta: Meta<typeof DecisionModalActions> = {
  component: DecisionModalActions,
  title: "components/cards/DecisionModalActions",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<AppCardProps> = (args) => {
  return <DecisionModalActions {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  labels: ["Ver detalles", "Editar", "Eliminar", "Configuración"],
  icons: [
    [<MdOutlineAssignmentTurnedIn />],
    [<MdModeEdit />],
    [<MdOutlineDelete />],
    [<MdOutlineAssignmentTurnedIn />],
  ],
  url: "/privileges",
};

export default meta;
