import {
  MdModeEdit,
  MdDelete,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";

import { Icon } from "@inube/design-system";

export const titlesOptions = [
  {
    id: "code",
    titleName: "Code",
    priority: 0,
  },

  {
    id: "nameRoles",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "aplicaicionRoles",
    titleName: "Aplicación",
    priority: 2,
  },
];

export const RolesBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 837px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

export const actionsConfig = [
  {
    id: "Details",
    actionName: "Detalles",
    content: () => (
      <Icon
        icon={<MdOutlineAssignmentTurnedIn />}
        size="16px"
        appearance="dark"
      />
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Editar",
    content: () => <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />,
    type: "primary",
  },
  {
    id: "Delete",
    actionName: "Eliminar",
    content: () => <Icon icon={<MdDelete />} size="16px" appearance="dark" />,
    type: "remove",
  },
];
