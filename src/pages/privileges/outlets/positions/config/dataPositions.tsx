import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import { Icon } from "@inube/design-system";
import { deleteItemData } from "@mocks/utils/dataMock.service";

import { activatePositionModal } from "../active-position/config/activatePosition.config";
import { DetailsModal } from "../components/DetailsModal";
import { ActivatePosition } from "../active-position";
import { IPosition } from "../add-position/types";
import { DeletePosition } from "../delete-positions";
import { deletePositionModal } from "../delete-positions/config/deletePositions.config";
import { IDeleteForMessage } from "../types";
import { CenteredTd } from "../../users/tabs/users/styles";

export const titlesOptions = [
  {
    id: "k_Grupo",
    titleName: "Código",
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
  setIdDeleted: (show: IDeleteForMessage) => void
) => {
  const dataDetailsPosition = (k_Grupo: string) => {
    const data = [
      linixPosition.find((position) => position.k_Grupo === k_Grupo),
    ].map((positionSelected) => ({
      Código: positionSelected?.k_Grupo || "",
      Nombre: positionSelected?.n_Grupo || "",
      Activo: positionSelected?.i_Activo === "Y" ? "activo" : "inactivo",
      Descripción: positionSelected?.n_Uso || "",
    }));

    return [...data].shift();
  };

  const actionsConfig = [
    {
      id: "i_activo",
      actionName: "Activo",
      content: (cargos: IPosition) => (
        <CenteredTd>
          <ActivatePosition
            handleActivate={() => {}}
            data={{
              id: cargos.k_Grupo || "",
              active: cargos.i_Activo,
              name: cargos.n_Grupo,
            }}
            showComplete={false}
            activateModalConfig={activatePositionModal}
          />
        </CenteredTd>
      ),
      type: "secondary",
    },
    {
      id: "Details",
      actionName: "Detalles",
      content: ({ k_Grupo }: { k_Grupo: string }) => (
        <DetailsModal data={dataDetailsPosition(k_Grupo) || {}} />
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: ({ k_Grupo }: { k_Grupo: string }) => (
        <Link to={`edit/${k_Grupo}`}>
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
          deletePositionModal={deletePositionModal}
          handleDeletePosition={deleteItemData}
          setIdDeleted={setIdDeleted}
          namePosition={k_Grupo}
        />
      ),
      type: "remove",
    },
  ];

  return actionsConfig;
};
