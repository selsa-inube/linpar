import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { deleteItemData } from "@mocks/utils/dataMock.service";

import { DetailsModal } from "../components/DetailsModal";
import { deleteRolModal } from "../delete-role/config/deleteRol.config";
import { DeleteRole } from "../delete-role";
import { activateRoleModal } from "../activate-role/config/activateRole.config";
import { ActivateRole } from "../activate-role";
import { IDeleteForMessage, IRol } from "../types";

export const titlesOptions = [
  {
    id: "k_Rol",
    titleName: "Código",
    priority: 0,
  },

  {
    id: "n_Rol",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "n_Uso",
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

export const actionsConfigPosition = (
  linixRoles: IRol[],
  setIdDeleted: (show: IDeleteForMessage) => void
) => {
  const dataDetailsRole = (k_Rol: number) => {
    const data = [linixRoles.find((role) => role.k_Rol === k_Rol)!].map(
      (roleSelected) => ({
        Código: roleSelected?.k_Rol,
        Nombre: roleSelected?.n_Rol,
        Aplicación: roleSelected?.n_Uso,
        Activo: roleSelected?.i_Activo === "Y" ? "active" : "inactive",
      })
    );

    return [...data].shift();
  };

  const selectedData = (k_Rol: number) =>
    linixRoles.find((role) => role.k_Rol === k_Rol);

  const actionsConfig = [
    {
      id: "i_Activo",
      actionName: "Activo",
      content: (roles: IRol) => (
        <ActivateRole
          handleActivate={() => {}}
          data={{
            id: roles?.id || 2,
            active: roles.i_Activo,
            name: roles.n_Rol,
          }}
          showComplete={false}
          activateModalConfig={activateRoleModal}
        />
      ),
      type: "secondary",
    },
    {
      id: "Details",
      actionName: "Detalles",
      content: ({ k_Rol }: { k_Rol: number }) => (
        <DetailsModal data={dataDetailsRole(k_Rol)} />
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: ({ k_Rol }: { k_Rol: number }) => (
        <Link to={`edit/${k_Rol}`} onClick={() => selectedData(k_Rol)}>
          <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
        </Link>
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: ({ k_Rol, n_Rol }: { k_Rol: number; n_Rol: string }) => (
        <DeleteRole
          nameRol={n_Rol}
          rol={k_Rol}
          deleteRolModal={deleteRolModal}
          handleDeleteRol={deleteItemData}
          setIdDeleted={setIdDeleted}
        />
      ),
      type: "remove",
    },
  ];

  return actionsConfig;
};
