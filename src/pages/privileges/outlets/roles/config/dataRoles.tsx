import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { roles } from "@mocks/privileges/roles/Roles.mock";
import { ActivateFormOptions } from "@pages/privileges/outlets/forms/ActivateFormOptions";
import { DeleteUser } from "@pages/privileges/outlets/users/tabs/users/DeleteUser";

import { DetailsModal } from "../components/DetailsModal";
import { IRol } from "../types";

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

const dataDetailsRol = (id: string) => {
  const data = [roles.find((role) => role.id === id)!].map((roleselectd) => ({
    Código: roleselectd?.k_rol,
    Nombre: roleselectd?.n_rol,
    Aplicación: roleselectd?.k_aplica,
    Activo: roleselectd?.i_activo ? "Si" : "No",
  }));

  return [...data].shift();
};

const selectedData = (id: string) => roles.find((role) => role.id === id);

const handleActive = (rolesData: IRol) =>
  roles.find((role) => role.id === rolesData.k_Rol);

export const actionsConfig = [
  {
    id: "i_activo",
    actionName: "Activo",
    content: (role: IRol) => {
      const adjustedRole = { id: role.k_Rol, active: role.i_Activo === "Y" };

      return (
        <ActivateFormOptions
          handleActivateUser={() => handleActive(role)}
          data={adjustedRole}
          showComplete={false}
        />
      );
    },
    type: "secondary",
  },
  {
    id: "Details",
    actionName: "Detalles",
    content: ({ id }: { id: string }) => (
      <DetailsModal data={dataDetailsRol(id)} />
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Editar",
    content: ({ id }: { id: string }) => (
      <Link to={`edit/${id}`} onClick={() => selectedData(id)}>
        <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
      </Link>
    ),
    type: "primary",
  },
  {
    id: "Delete",
    actionName: "Eliminar",
    content: ({ id }: { id: string }) => <DeleteUser user={selectedData(id)} />,
    type: "remove",
  },
];
