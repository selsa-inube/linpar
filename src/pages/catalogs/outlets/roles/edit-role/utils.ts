import { editRoles } from "@services/roles/editRoles";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import {
  ICasosDeUsoPorRol,
  IFormAddRole,
  IReglasDeNegocioPorRol,
  IRol,
  ITiposDeMovimientoContablePorRol,
} from "../types";

export const editDataRoles = async (
  rolesData: IFormAddRole,
  optionsData?: IAssignmentFormEntry[]
) => {
  const normalizeTransactionTypes = rolesData.transactionTypes.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Tipmov: j.id,
        })) as ITiposDeMovimientoContablePorRol[];
    }
  );
  const normalizeReglasNegocio = rolesData.businessRules.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Regla: j.id,
        })) as IReglasDeNegocioPorRol[];
    }
  );
  const normalizeUseCases = rolesData.useCases.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Usecase: j.id,
        })) as ICasosDeUsoPorRol[];
    }
  );

  const normalizeAncillaryAccounts = [
    {
      k_Rol: rolesData.generalInformation.values.k_Rol || 0,
      i_Tipent: "C",
      k_Codcta: rolesData.ancillaryAccounts.values.commercialSector,
      TransactionOperation: "PartialUpdate",
    },
    {
      k_Rol: rolesData.generalInformation.values.k_Rol || 0,
      i_Tipent: "O",
      k_Codcta: rolesData.ancillaryAccounts.values.officialSector,
      TransactionOperation: "PartialUpdate",
    },
    {
      k_Rol: rolesData.generalInformation.values.k_Rol || 0,
      i_Tipent: "S",
      k_Codcta: rolesData.ancillaryAccounts.values.solidaritySector,
      TransactionOperation: "PartialUpdate",
    },
  ];
  const newoptionsUseCase: IRol = {
    modifyJustification: "edit",
    k_Rol: rolesData.generalInformation.values.k_Rol || 0,
    n_Rol: rolesData.generalInformation.values.n_Rol,
    n_Uso: rolesData.generalInformation.values.description,
    k_Aplica: rolesData.generalInformation.values.applicationId,
    i_Activo: "",
    k_Tipcon: "",
    tiposDeMovimientoContablePorRol: normalizeTransactionTypes,
    reglasDeNegocioPorRol: normalizeReglasNegocio,
    casosDeUsoPorRol: normalizeUseCases,
    cuentasAuxiliaresPorRol: normalizeAncillaryAccounts,
  };
  let confirmationType = true;

  try {
    await editRoles(newoptionsUseCase);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
