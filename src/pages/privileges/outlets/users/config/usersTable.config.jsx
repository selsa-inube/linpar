import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { ActivateUserConfig } from "../ActivateUserConfig/index";

const usersBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 980px)", totalColumns: 2 },
  { breakpoint: "(max-width: 850px)", totalColumns: 4 },
  { breakpoint: "(max-width: 680px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const usersTitlesConfig = [
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

const usersActionsConfig = [
  {
    id: 1,
    actionName: "Activate",
    content: (entry) => <ActivateUserConfig entry={entry} id={entry.id} />,
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

export { usersBreakPointsConfig, usersActionsConfig, usersTitlesConfig };
