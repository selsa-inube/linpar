import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

import { Icon } from "@inubekit/icon";
import { deleteItemData } from "@mocks/utils/dataMock.service";
import { Text } from "@inubekit/text";
import { deleteLinixUseCaseModal } from "../delete-linix-use-case/config/deleteLinixUseCase.config";
import { DetailsModal } from "../components/DetailsModal";
import { IDeleteForMessage, UseCase } from "../types";
import { DeleteLinixUseCase } from "../delete-linix-use-case";
import { OptionSelect } from "../adding-linix-use-case/config/selectLinixUseCase.config";
import { IEntry } from "@src/components/data/TableLinpar/types";
import { StyledContainerEdit, StyledContainerIcon } from "../styles";

export const formSelectLabel = (value: string) => {
  return OptionSelect.find((option: any) => value === option.label)?.id;
};
export const formSelectOptionId = (value: string) => {
  return OptionSelect.find((option: any) => value === option.id)?.label;
};

const titlesOptions = [
  {
    id: "k_Usecase",
    titleName: "Código",
    priority: 0,
  },

  {
    id: "n_Usecase",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "i_Tipusec",
    titleName: "Tipo",
    priority: 2,
  },
];

const useCasesBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 837px)", totalColumns: 1 },
];

export const actionsConfigLinixUseCase = (
  linixUseCases: UseCase[],
  setIdDeleted: (show: IDeleteForMessage) => void
) => {
  const dataDetailsLinixUseCase = (k_Usecase: string) => {
    const data = [
      linixUseCases.find(
        (linixUseCases) => linixUseCases.k_Usecase === k_Usecase
      )!,
    ].map((linixUseCasesSelected) => ({
      Código: linixUseCasesSelected?.k_Usecase || "",
      Nombre: linixUseCasesSelected?.n_Usecase || "",
      Tipo: linixUseCasesSelected?.i_Tipusec || "",
      Descripción: linixUseCasesSelected?.n_Descrip || "",
      "Opción botón cliente servidor":
        linixUseCasesSelected?.k_Ncampo &&
        linixUseCasesSelected?.k_Ncampo !== "undefined"
          ? linixUseCasesSelected?.k_Ncampo
          : " ",
    }));
    return [...data].shift();
  };

  const actionsConfig = [
    {
      id: "Details",
      actionName: "Detalles",
      content: (entry: IEntry) => (
        <DetailsModal data={dataDetailsLinixUseCase(entry.k_Usecase)} />
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: (entry: IEntry) => (
        <StyledContainerEdit>
          <Link to={`edit/${entry.k_Usecase}`}>
            <StyledContainerIcon>
              <Icon
                appearance="dark"
                cursorHover
                icon={<MdModeEdit />}
                size="16px"
              />
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
        <DeleteLinixUseCase
          nameLinixuseCase={entry.n_Usecase}
          linixUseCase={entry.k_Usecase}
          deleteLinixUseCaseModal={deleteLinixUseCaseModal}
          handleDeleteLinixUseCase={deleteItemData}
          setIdDeleted={setIdDeleted}
        />
      ),
      type: "remove",
    },
  ];
  return actionsConfig;
};

export { useCasesBreakPointsConfig, titlesOptions };
