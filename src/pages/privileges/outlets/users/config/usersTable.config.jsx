import { MdModeEdit, MdToggleOff } from "react-icons/md";
import { DeleteUser } from "../DeleteUser";

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
    content: (entry, handleChangeEntry, HandleShowMessage) => (
      <DeleteUser
        user={entry}
        handleChangeDeleteUser={handleChangeEntry}
        HandleShowMessage={HandleShowMessage}
      />
    ),
    type: "remove",
  },
];

export { usersBreakPointsConfig, usersActionsConfig, usersTitlesConfig };
