import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import { Icon } from "@inube/design-system";
import { deleteItemData } from "@mocks/utils/dataMock.service";

import { activatePositionModal } from "../active-position/config/activatePosition.config";
import { DetailsModal } from "../components/DetailsModal";
import { ActivatePosition } from "../active-position";
import { IPosition } from "../add-position/types";
import { DeletePosition } from "../delete-positions";
import { deleteRolModal } from "../../roles/delete-role/config/deleteRol.config";

export const titlesOptions = [
  {
    id: "k_Grupo",
    titleName: "Code",
    priority: 0,
  },
  {
    id: "n_Grupo",
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

export const actionsConfigPosition = (
  linixPosition: IPosition[],
  setIdDeleted: (show: string) => void
) => {
  const dataDetailsPosition = (k_Grupo: string) => {
    const data = [
      linixPosition.find((position) => position.k_Grupo === k_Grupo)!,
    ].map((positionSelected) => ({
      Código: positionSelected?.k_Grupo,
      Nombre: positionSelected?.n_Grupo,
      Activo: positionSelected?.i_Activo === "Y" ? "activo" : "inactivo",
      Descripción: positionSelected?.n_Uso,
    }));

    return [...data].shift();
  };

  const selectedData = (k_Grupo: string) =>
    linixPosition.find((position) => position.k_Grupo === k_Grupo);

  const actionsConfig = [
    {
      id: "i_activo",
      actionName: "Activo",
      content: ({ k_Grupo }: { k_Grupo: string }) => {
        const position = selectedData(k_Grupo);
        const adjustedPosition = {
          id: position?.k_Grupo || "",
          active: position?.i_Activo === "Y" || false,
          name: position?.n_Grupo || "",
        };
        return (
          <ActivatePosition
            handleActivate={() => {}}
            data={adjustedPosition}
            showComplete={false}
            activateModalConfig={activatePositionModal}
          />
        );
      },
      type: "secondary",
    },
    {
      id: "Details",
      actionName: "Detalles",
      content: ({ k_Grupo }: { k_Grupo: string }) => (
        <DetailsModal data={dataDetailsPosition(k_Grupo)} />
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: ({ k_Grupo }: { k_Grupo: string }) => (
        <Link to={`edit/${k_Grupo}`} onClick={() => selectedData(k_Grupo)}>
          <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
        </Link>
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: ({ k_Grupo, n_Grupo }: { k_Grupo: string; n_Grupo: string }) => (
        <DeletePosition
          nameRol={n_Grupo}
          linixPosition={k_Grupo}
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
