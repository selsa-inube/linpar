import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Icon } from "@inube/design-system";

import { mockRoles } from "@mocks/privileges/roles/Roles.mock";

import { activateRoleModal } from "../../roles/config/activateRole.config";
import { ActivateFormOptions } from "../../forms/ActivateFormOptions";
import { DetailsModal } from "../components/DetailsModal";

const dataDetailsRol = (k_Rol: string) => {
  const data = [mockRoles.find((role) => role.k_Rol === k_Rol)!].map(
    (roleselectd) => ({
      Código: roleselectd?.k_Rol,
      Nombre: roleselectd?.n_Rol,
      Aplicación: roleselectd?.n_Uso,
      Activo: roleselectd?.i_Activo === "Y" ? "active" : "inactive",
    })
  );

  return [...data].shift();
};

export const titlesOptions = [
  {
    id: "k_Rol",
    titleName: "Code",
    priority: 0,
  },
  {
    id: "n_Rol",
    titleName: "Nombre",
    priority: 1,
  },
];

export const PositionsBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 2 },
  { breakpoint: "(max-width: 1010px)", totalColumns: 1 },
  { breakpoint: "(max-width: 848px)", totalColumns: 2 },
  { breakpoint: "(max-width: 430px)", totalColumns: 1 },
];

const selectedData = (k_Rol: string) =>
  mockRoles.find((role) => role.k_Rol === k_Rol);

export const actionsConfig = [
  {
    id: "i_activo",
    actionName: "Activo",
    content: ({ k_Rol }: { k_Rol: string }) => {
      return (
        <ActivateFormOptions
          handleActivate={() => {}}
          data={{
            id: selectedData(k_Rol)?.k_Rol || "",
            active: selectedData(k_Rol)?.i_Activo === "Y" || false,
          }}
          showComplete={false}
          activateModalConfig={activateRoleModal}
        />
      );
    },
    type: "secondary",
  },
  {
    id: "Details",
    actionName: "Detalles",
    content: ({ k_Rol }: { k_Rol: string }) => (
      <DetailsModal data={dataDetailsRol(k_Rol)} />
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Editar",
    content: () => (
      <Link to={`edit`}>
        <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
      </Link>
    ),
    type: "primary",
  },
  {
    id: "Delete",
    actionName: "Eliminar",
    content: () => (
      <Link to={`delete`}>
        <Icon icon={<MdOutlineDelete />} size="16px" appearance="dark" />
      </Link>
    ),
    type: "remove",
  },
];
