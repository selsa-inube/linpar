import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { Text } from "@inubekit/text";
import { deleteItemData } from "@mocks/utils/dataMock.service";

import { DetailsModal } from "../components/DetailsModal";
import { deleteRolModal } from "../delete-role/config/deleteRol.config";
import { DeleteRole } from "../delete-role";
import { activateRoleModal } from "../activate-role/config/activateRole.config";
import { ActivateRole } from "../activate-role";
import { IDeleteForMessage, IRol } from "../types";
import { IEntry } from "@src/components/data/TableLinpar/types";
import { StyledContainerEdit, StyledContainerIcon } from "../styles";

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
    id: "k_Aplica",
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

export const linixRolesData = (
  roles: IRol[],
  filterAplication: (show: string) => void
) =>
  roles.map((entry) => ({
    ...entry,
    id: entry.k_Rol?.toString(),
    k_Rol: entry.k_Rol,
    n_Rol: entry.n_Rol,
    k_Aplica: filterAplication(entry.k_Aplica),
  }));
export const actionsConfigPosition = (
  linixRoles: IRol[],
  setIdDeleted: (show: IDeleteForMessage) => void
) => {
  const dataDetailsRole = (k_Rol: number) => {
    const data = [linixRoles.find((role) => role.k_Rol === k_Rol)!].map(
      (roleSelected) => ({
        Código: roleSelected?.k_Rol || "",
        Nombre: roleSelected?.n_Rol,
        Aplicación: roleSelected?.k_Aplica,
        Activo: roleSelected?.i_Activo === "Y" ? "active" : "inactive",
      })
    );

    return [...data].shift();
  };

  const actionsConfig = [
    {
      id: "i_Activo",
      actionName: "Activo",
      content: (entry: IEntry) => (
        <ActivateRole
          handleActivate={() => {}}
          data={{
            id: Number(entry.id) || 2,
            active: entry.i_Activo,
            name: entry.n_Rol,
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
      content: (entry: IEntry) => (
        <DetailsModal data={dataDetailsRole(entry.k_Rol) || {}} />
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: (entry: IEntry) => (
        <StyledContainerEdit>
          <Link to={`edit/${entry.k_Rol}`}>
            <StyledContainerIcon>
              <Icon appearance="dark" cursorHover icon={<MdModeEdit />} />
            </StyledContainerIcon>
            <Text size="small" type="body">
              Editar
            </Text>
          </Link>
        </StyledContainerEdit>
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: (entry: IEntry) => (
        <DeleteRole
          nameRol={entry.n_Rol}
          rol={entry.k_Rol}
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
