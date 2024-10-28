import { editCargos } from "@services/positions/editPositions";
import { IAssignmentFormEntry } from "../../users/types/forms.types";
import {
  IFormAddPosition,
  IPosition,
  IRolByPosition,
} from "../add-position/types";

export const editPositions = async (
  positionData: IFormAddPosition,
  businessUnitPublicCode: string,
  optionsData?: IAssignmentFormEntry[]
) => {
  const normalizeRolesPorCargos = positionData.rolesPorCargos.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Rol: Number(j.id),
        })) as unknown as IRolByPosition[];
    }
  );

  const newoptionsUseCase: IPosition = {
    modifyJustification: "edit",
    n_Grupo: positionData.generalInformation.values.n_Grupo,
    k_Grupo: positionData.generalInformation.values.k_Grupo || "",
    n_Uso: positionData.generalInformation.values.n_Uso,
    rolesPorCargo: normalizeRolesPorCargos,
  };

  let confirmationType = true;

  try {
    await editCargos(newoptionsUseCase, businessUnitPublicCode);
  } catch (error) {
    confirmationType = false;
    throw error;
  }

  return confirmationType;
};
