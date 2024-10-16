import { editRoles } from "@services/roles/editRoles";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import {
  ICasosDeUsoPorRol,
  ICuentasAuxiliaresPorRol,
  IFormAddRole,
  IReglasDeNegocioPorRol,
  IRol,
  ITiposDeMovimientoContablePorRol,
} from "../types";

export const editDataRoles = async (
  rolesData: IFormAddRole,
  rolesEditCuantasA: ICuentasAuxiliaresPorRol[],
  rolesBusinessUnit: string,
  optionsData?: IAssignmentFormEntry[],
  roleID?: number
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

  const normalizeAncillaryAccounts = () => {
    const rolesEditCuantasData = rolesEditCuantasA.filter(
      (role) => role.id === roleID
    );

    const ancillaryAccounts: ICuentasAuxiliaresPorRol[] = [];

    rolesEditCuantasData?.map((data: ICuentasAuxiliaresPorRol) => {
      if (data.k_Codcta.length > 0) {
        if (data.i_Tipent === "C") {
          rolesData.ancillaryAccounts.values.commercialSector
            ? ancillaryAccounts.push({
                k_Rol: rolesData.generalInformation.values.k_Rol || 0,
                i_Tipent: "C",
                k_Codcta: rolesData.ancillaryAccounts.values.commercialSector,
                TransactionOperation: "PartialUpdate",
              })
            : ancillaryAccounts.push({
                k_Rol: rolesData.generalInformation.values.k_Rol || 0,
                i_Tipent: "C",
                k_Codcta: rolesData.ancillaryAccounts.values.commercialSector,
                TransactionOperation: "Delete",
              });
        }
        if (data.i_Tipent === "O") {
          rolesData.ancillaryAccounts.values.officialSector
            ? ancillaryAccounts.push({
                k_Rol: rolesData.generalInformation.values.k_Rol || 0,
                i_Tipent: "O",
                k_Codcta: rolesData.ancillaryAccounts.values.officialSector,
                TransactionOperation: "PartialUpdate",
              })
            : ancillaryAccounts.push({
                k_Rol: rolesData.generalInformation.values.k_Rol || 0,
                i_Tipent: "O",
                k_Codcta: rolesData.ancillaryAccounts.values.officialSector,
                TransactionOperation: "Delete",
              });
        }
        if (data.i_Tipent === "S") {
          rolesData.ancillaryAccounts.values.solidaritySector
            ? ancillaryAccounts.push({
                k_Rol: rolesData.generalInformation.values.k_Rol || 0,
                i_Tipent: "S",
                k_Codcta: rolesData.ancillaryAccounts.values.solidaritySector,
                TransactionOperation: "PartialUpdate",
              })
            : ancillaryAccounts.push({
                k_Rol: rolesData.generalInformation.values.k_Rol || 0,
                i_Tipent: "S",
                k_Codcta: rolesData.ancillaryAccounts.values.solidaritySector,
                TransactionOperation: "Delete",
              });
        }
      }
      return null;
    });

    const hasCommercialSector = rolesEditCuantasData.some(
      (account) => account.i_Tipent === "C"
    );

    const hasOfficialSector = rolesEditCuantasData.some(
      (account) => account.i_Tipent === "O"
    );

    const hasSolidaritySector = rolesEditCuantasData.some(
      (account) => account.i_Tipent === "S"
    );

    if (
      rolesData.ancillaryAccounts.values.commercialSector &&
      !hasCommercialSector
    ) {
      ancillaryAccounts.push({
        k_Rol: rolesData.generalInformation.values.k_Rol || 0,
        i_Tipent: "C",
        k_Codcta: rolesData.ancillaryAccounts.values.commercialSector,
        TransactionOperation: "Insert",
      });
    }
    if (
      rolesData.ancillaryAccounts.values.officialSector &&
      !hasOfficialSector
    ) {
      ancillaryAccounts.push({
        k_Rol: rolesData.generalInformation.values.k_Rol || 0,
        i_Tipent: "O",
        k_Codcta: rolesData.ancillaryAccounts.values.officialSector || "",
        TransactionOperation: "Insert",
      });
    }
    if (
      rolesData.ancillaryAccounts.values.solidaritySector &&
      !hasSolidaritySector
    ) {
      ancillaryAccounts.push({
        k_Rol: rolesData.generalInformation.values.k_Rol || 0,
        i_Tipent: "S",
        k_Codcta: rolesData.ancillaryAccounts.values.solidaritySector || "",
        TransactionOperation: "Insert",
      });
    }

    return ancillaryAccounts;
  };

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
    cuentasAuxiliaresPorRol: normalizeAncillaryAccounts(),
  };
  let confirmationType = true;

  try {
    await editRoles(newoptionsUseCase, rolesBusinessUnit);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
