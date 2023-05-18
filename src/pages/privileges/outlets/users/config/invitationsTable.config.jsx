import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

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

const deleteInvitationUserDecisionConfig = {
  id: 1,
  title: "Borrar invitación",
  description: "¿Seguro que quieres eliminar la invitación?",
  actionText: "Eliminar",
  appearance: "remove",
};

const deleteInvitationUserMessageConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: (value) =>
      `Hemos eliminado correctamente la invitación del usuario ${value}.`,
    appearance: "confirm",
    duration: 2000,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: (value) =>
      `Hemos presentado problemas al eliminar la invitación del usuario ${value}.`,
    appearance: "remove",
    duration: 2000,
  },
};

export {
  invitationTitlesConfig,
  invitationBreakpointsConfig,
  deleteInvitationUserDecisionConfig,
  deleteInvitationUserMessageConfig,
};
