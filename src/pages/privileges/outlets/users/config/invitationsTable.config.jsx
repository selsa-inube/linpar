import { MdOutlineDelete, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { ResendInvitation } from "../ResendInvitation/index";

const invitationActionsConfig = [
  {
    id: 1,
    actionName: "Complete",
    content: <MdOutlineAssignmentTurnedIn />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Resend",
    content: (user) => <ResendInvitation user={user} />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <MdOutlineDelete />,
    type: "remove",
  },
];

const invitationTitlesConfig = [
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

const invitationBreakpointsConfig = [
  { breakpoint: "(min-width: 1229px)", totalColumns: 5 },
  { breakpoint: "(max-width: 1228px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1127px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1011px)", totalColumns: 2 },
  { breakpoint: "(max-width: 851px)", totalColumns: 2 },
  { breakpoint: "(max-width: 849px)", totalColumns: 4 },
  { breakpoint: "(max-width: 715px)", totalColumns: 3 },
  { breakpoint: "(max-width: 602px)", totalColumns: 2 },
  { breakpoint: "(max-width: 579px)", totalColumns: 3 },
  { breakpoint: "(max-width: 506px)", totalColumns: 2 },
  { breakpoint: "(max-width: 316px)", totalColumns: 1 },
];

export {
  invitationActionsConfig,
  invitationTitlesConfig,
  invitationBreakpointsConfig,
};
