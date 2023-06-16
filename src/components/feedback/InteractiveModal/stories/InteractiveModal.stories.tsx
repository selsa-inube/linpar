import { IAction } from "@src/components/data/Table/types";
import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";
import {
  MdOutlineAssignmentTurnedIn,
  MdOutlineDelete,
  MdOutlineShortcut,
} from "react-icons/md";
import { InteractiveModal, InteractiveModalProps } from "..";
import { ILabel } from "../types";

const story = {
  component: InteractiveModal,
  title: "components/feedback/InteractiveModal",
  parameters: {
    layout: "fullscreen",
  },
};

const data = {
  id: 10,
  userID: "45645",
  username: "David Leonardo Garzón",
  mail: "lgarzon@gmail.com",
  invitationDate: "11/JUN/2022",
  status: "Sent",
};

const Template: StoryFn<InteractiveModalProps> = (args) => (
  <InteractiveModal {...args} />
);

const closeInteractiveModal = () => {
  action("InteractiveModal closed");
};

const actions: IAction[] = [
  {
    id: 1,
    actionName: "Complete",
    content: <MdOutlineAssignmentTurnedIn />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Resend",
    content: <MdOutlineShortcut />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <MdOutlineDelete />,
    type: "remove",
  },
];

const labels: ILabel[] = [
  {
    id: "userID",
    titleName: "User Id",
    priority: 0,
  },
  {
    id: "username",
    titleName: "Username",
    priority: 1,
  },
  {
    id: "mail",
    titleName: "Mail",
    priority: 2,
  },
  {
    id: "invitationDate",
    titleName: "Invitation Date",
    priority: 3,
  },
  {
    id: "status",
    titleName: "Status",
    priority: 4,
  },
];

export const Default = Template.bind({});
Default.args = {
  title: "User Information",
  closeModal: closeInteractiveModal,
  infoData: data,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  title: "User Information",
  closeModal: closeInteractiveModal,
  infoData: data,
  labels,
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: "User Information",
  closeModal: closeInteractiveModal,
  infoData: data,
  actions,
  labels,
};

export default story;
