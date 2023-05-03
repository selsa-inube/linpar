import { MdModeEdit, MdOutlineDelete, MdToggleOff } from "react-icons/md";

const titlesConfig = [
  {
    id: "username",
    titleName: "Username",
    priority: 1,
  },
  {
    id: "code",
    titleName: "Code",
    priority: 2,
  },
  {
    id: "userID",
    titleName: "User Id",
    priority: 0,
  },
  {
    id: "position",
    titleName: "Position",
    priority: 3,
  },
];

const actionsConfig = [
  {
    id: 1,
    actionName: "Activate",
    content: <MdToggleOff size={32} />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Edit",
    content: <MdModeEdit />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <MdOutlineDelete />,
    type: "remove",
  },
];

export { actionsConfig, titlesConfig };
