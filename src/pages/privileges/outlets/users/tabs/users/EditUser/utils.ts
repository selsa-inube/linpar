import { editUsers } from "@src/services/users/editUsers";
import {
  Ibranches,
  IFormAddUsers,
  IGeneralInformationUsersForm,
  Iproyects,
  ItiposDeNomina,
  IunidadesPresupuestalesDeAuxilios,
} from "@src/services/users/users.types";
import { IAssignmentFormEntry } from "../../../types/forms.types";

export const editUsersData = async (
  usersData: IFormAddUsers,
  optionsData?: IAssignmentFormEntry[]
) => {
  const normalizeBranches = usersData.branches.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Sucurs: j.id,
        })) as Ibranches[];
    }
  );
  const normalizeProjects = usersData.projectsOrEvents.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Numdoc: j.id,
          k_Tipodr: "EV",
        })) as Iproyects[];
    }
  );

  const normalizeUnidadesPresupuestalesDeAuxilios =
    usersData.aidBudgetUnits.values?.flatMap((data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Unidad: j.id,
        })) as IunidadesPresupuestalesDeAuxilios[];
    });
  const normalizeTiposDeNomina = usersData.payrolls.values?.flatMap(
    (data: IAssignmentFormEntry) => {
      return optionsData
        ?.filter((j: IAssignmentFormEntry) => j.id === data.id)
        .map((j: IAssignmentFormEntry) => ({
          transactionOperation: j.isActive ? "Insert" : "Delete",
          k_Tipnom: j.id,
        })) as ItiposDeNomina[];
    }
  );
  const newoptionsUseCase: IGeneralInformationUsersForm = {
    modifyJustification: "edit",
    k_Usuari: usersData.generalInformation.values.k_Usuari || "",
    n_Usuari: usersData.generalInformation.values.n_Usuari,
    k_Grupo: usersData.generalInformation.values.k_Grupo,
    n_Grupo: usersData.generalInformation.values.n_Grupo,
    sucursales: normalizeBranches || [],
    proyectosOEventos: normalizeProjects,
    unidadesPresupuestalesDeAuxilios: normalizeUnidadesPresupuestalesDeAuxilios,
    tiposDeNomina: normalizeTiposDeNomina,
  };
  let confirmationType = true;

  try {
    await editUsers(newoptionsUseCase);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
