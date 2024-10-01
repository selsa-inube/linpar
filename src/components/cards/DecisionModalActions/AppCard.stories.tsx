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
//const [isVisible, setIsVisible] = useState(true);

//const handleClose = () => {
//setIsVisible(false);
//};

// return isVisible ? (
//   <DecisionModalActions {...args} onClose={handleClose} />
// ) : (
//   <></>
// );

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
  //onClose: () => {},
};

export default meta;
