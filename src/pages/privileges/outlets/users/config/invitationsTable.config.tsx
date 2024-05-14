import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const invitationsTableTitles = [
  {
    id: "userIdentification",
    titleName: "Identificación",
    priority: 1,
  },
  {
    id: "userName",
    titleName: "Nombre de usuario",
    priority: 0,
  },
  {
    id: "email",
    titleName: "Correo",
    priority: 2,
  },
  {
    id: "dateStart",
    titleName: "Fecha de invitación",
    priority: 3,
  },
  {
    id: "status",
    titleName: "Estado",
    priority: 4,
  },
];

const invitationsTableBreakpoints = [
  { breakpoint: "(min-width: 1229px)", totalColumns: 5 },
  { breakpoint: "(max-width: 1320px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1200px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1110px)", totalColumns: 2 },
  { breakpoint: "(max-width: 865px)", totalColumns: 1 },
  { breakpoint: "(max-width: 849px)", totalColumns: 4 },
  { breakpoint: "(max-width: 760px)", totalColumns: 3 },
  { breakpoint: "(max-width: 650px)", totalColumns: 2 },
  { breakpoint: "(max-width: 400px)", totalColumns: 1 },
];

const deleteInvitationModalConfig = {
  id: 1,
  title: "Borrar invitación",
  description: "¿Seguro que quieres eliminar la invitación?",
  actionText: "Eliminar",
  appearance: EAppearance.ERROR,
};

const deleteInvitationMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: (value: string) =>
      `Hemos eliminado correctamente la invitación del usuario ${value}.`,
    appearance: EAppearance.SUCCESS,
    duration: 2000,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado problemas al eliminar la invitación del usuario ${value}.`,
    appearance: EAppearance.ERROR,
    duration: 2000,
  },
};

export {
  deleteInvitationMessagesConfig,
  deleteInvitationModalConfig,
  invitationsTableBreakpoints,
  invitationsTableTitles,
};
