import {
  MdOutlineDelete,
  MdOutlineLibraryAddCheck,
  MdOutlineSubdirectoryArrowRight,
} from "react-icons/md";

const invitationActionsConfig = [
  {
    id: 1,
    actionName: "Complete",
    content: <MdOutlineLibraryAddCheck />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Resend",
    content: <MdOutlineSubdirectoryArrowRight />,
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
  { breakpoint: "(min-width: 1091px)", totalColumns: 5 },
  { breakpoint: "(max-width: 1080px)", totalColumns: 4 },
  { breakpoint: "(max-width: 980px)", totalColumns: 3 },
  { breakpoint: "(max-width: 850px)", totalColumns: 5 },
  { breakpoint: "(max-width: 680px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 2 },
];

export {
  invitationActionsConfig,
  invitationTitlesConfig,
  invitationBreakpointsConfig,
};
