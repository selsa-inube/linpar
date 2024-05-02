import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { Icon } from "@inube/design-system";

import { deleteItemData } from "@mocks/utils/dataMock.service";

import { activatePositionModal } from "../active-position/config/activatePosition.config";
import { DetailsModal } from "../components/DetailsModal";
import { DeletePosition } from "../delete-positions";
import { deletePositionModal } from "../delete-positions/config/deletePositions.config";
import { ActivatePosition } from "../active-position";
import { IPosition } from "../add-position/types";

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

export const actionsConfigPosition = (linixPosition: IPosition[]) => {
  const dataDetailsPosition = (k_Grupo: string) => {
    const data = [
      linixPosition.find((position) => position.k_Grupo === k_Grupo)!,
    ].map((positionSelected) => ({
      Código: positionSelected?.k_Grupo,
      Nombre: positionSelected?.n_Grupo,
      Activo: positionSelected?.i_Activo === "Y" ? "activo" : "inactivo",
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
        return (
          <ActivatePosition
            handleActivate={() => {}}
            data={{
              id: selectedData(k_Grupo)?.k_Grupo || "",
              active: selectedData(k_Grupo)?.i_Activo === "Y" || false,
              name: selectedData(k_Grupo)?.n_Grupo || "",
            }}
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
      content: ({ k_Grupo }: { k_Grupo: string }) => (
        <DeletePosition
          linixPosition={k_Grupo}
          deletePosition={deletePositionModal}
          handleDeletePosition={deleteItemData}
        />
      ),
      type: "remove",
    },
  ];

  return actionsConfig;
};
