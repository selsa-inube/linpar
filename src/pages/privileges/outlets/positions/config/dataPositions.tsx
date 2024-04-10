import { mockRoles } from "@src/mocks/privileges/roles/Roles.mock";
import {
  MdModeEdit,
  MdOutlineAssignmentTurnedIn,
  MdOutlineDelete,
} from "react-icons/md";
import { ActivateFormOptions } from "../../forms/ActivateFormOptions";
import { Link } from "react-router-dom";
import { Icon } from "@inube/design-system";
import { activateRoleModal } from "../../roles/config/activateRole.config";

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
    content: () => (
      <Link to={`Details`}>
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
