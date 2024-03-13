import { Link } from "react-router-dom";

import { MdModeEdit, MdOutlineAssignmentTurnedIn } from "react-icons/md";

import { Icon } from "@inube/design-system";
import { IRole, roles } from "@src/mocks/privileges/roles/Roles.mock";
import { DeleteUser } from "@pages/privileges/outlets/users/tabs/users/DeleteUser";
import { ActivateFormOptions } from "@src/pages/privileges/outlets/forms/ActivateFormOptions";

export const titlesOptions = [
  {
    id: "k_rol",
    titleName: "Code",
    priority: 0,
  },

  {
    id: "n_rol",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "k_aplica",
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

const handleClick = (id: string) => roles.find((role) => role.id === id);

const handleActiuve = (rolesData: IRole) =>
  roles.find((role) => role.id === rolesData.id);

export const actionsConfig = [
  {
    id: "i_activo",
    actionName: "Activo",
    content: (roles: IRole) => (
      <ActivateFormOptions<IRole>
        handleActivateUser={() => handleActiuve(roles)}
        data={roles}
        showComplete={false}
      />
    ),
    type: "secondary",
  },
  {
    id: "Details",
    actionName: "Detalles",
    content: ({ id }: { id: string }) => (
      <Link to={`datails/${id}`} onClick={() => handleClick(id)}>
        <Icon
          icon={<MdOutlineAssignmentTurnedIn />}
          size="16px"
          appearance="dark"
        />
      </Link>
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Editar",
    content: ({ id }: { id: string }) => (
      <Link to={`edit/${id}`} onClick={() => handleClick(id)}>
        <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
      </Link>
    ),
    type: "primary",
  },
  {
    id: "Delete",
    actionName: "Eliminar",
    content: ({ id }: { id: string }) => <DeleteUser user={handleClick(id)} />,
    type: "remove",
  },
];
