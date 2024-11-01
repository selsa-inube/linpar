import { addLinixCompletion } from "@services/invitations/completarInvitacion";
import { IUser } from "@services/users/invitation.types";
import { stepsRegisterUserConfig } from "./config/completeInvitation.config";
import { IFormCompleteInvitation, IFormCompleteInvitationRef } from "./types";

export const completeInvitationStepsRules = (
  currentStep: number,
  currentDataCompleteInvitationForm: IFormCompleteInvitation,
  formReferences: IFormCompleteInvitationRef,
  isCurrentFormValid: boolean
) => {
  let newDataCompleteInvitationForm = {
    ...currentDataCompleteInvitationForm,
  };

  const stepKey = Object.entries(stepsRegisterUserConfig).find(
    ([, config]) => config.id === currentStep
  )?.[0];

  if (!stepKey) return currentDataCompleteInvitationForm;

  if (stepKey !== "generalInformation")
    return currentDataCompleteInvitationForm;

  const values =
    formReferences[stepKey as keyof IFormCompleteInvitationRef]?.current
      ?.values;

  return (newDataCompleteInvitationForm = {
    ...newDataCompleteInvitationForm,
    [stepKey]: { isValid: isCurrentFormValid, values: values! },
  });
};

export interface InvitationEntry {
  customerId?: string;
  dateEnd?: string;
  dateStart?: string;
  email?: string;
  invitationId?: string;
  password?: string;
  phoneNumber?: string;
  position?: string;
  positionId?: string;
  requestingUser?: string;
  status?: string;
  userAccountId?: string;
  userIdentification?: string;
  userName?: string;
  branches: { id: string }[];
  projects: { id: string }[];
  events: { id: string }[];
  aidBudgetUnits: { id: string }[];
  payrolls: { id: string }[];
}

export const completeInvitationData = async (
  invitationData: IFormCompleteInvitation,
  businessUnitPublicCode: string
) => {
  const {
    generalInformation: { values: generalInformation },
    branches: { values: branchesValues },
    proyectsEvents: { values: proyectEvents },
    aidBudgetUnits: { values: aidBudgetUnits },
    payrolls: { values: payrolls },
    payrollPayments: { values: appraisalPayments },
  } = invitationData;

  const normalizeBranches = branchesValues
    .filter((branchesValues) => branchesValues.isActive === true)
    .map((mapNewBranches) => ({
      k_Sucurs: mapNewBranches.id,
    }));

  const normalizeProyectsEvents = proyectEvents
    .filter((proyectsEvents) => proyectsEvents.isActive === true)
    .map((mapNewProyectsEvents) => ({
      k_Numdoc: mapNewProyectsEvents.id,
      k_Tipodr: mapNewProyectsEvents.value,
    }));

  const normalizeAidBudgetUnits = aidBudgetUnits
    .filter((aidBudgetUnits) => aidBudgetUnits.isActive === true)
    .map((mapNewAidBudgetUnits) => ({
      k_Unidad: mapNewAidBudgetUnits.id,
    }));

  const normalizePayrolls = payrolls
    .filter((payrolls) => payrolls.isActive === true)
    .map((mapNewPayrolls) => ({
      k_Tipnom: mapNewPayrolls.id,
    }));

  const normalizePayrollPayments = appraisalPayments
    .filter((appraisalPayments) => appraisalPayments.isActive === true)
    .map((mapNewPayrollPayments) => ({
      k_Nomina: mapNewPayrollPayments.id,
    }));

  const completeInvitationUser: IUser = {
    invitationId: generalInformation.invitationId,
    modifyJustification: "Porque es una prueba",
    a_Numnit: generalInformation.userIdentification,
    k_Grupo: generalInformation.positionsId || "",
    k_Usuari: generalInformation.userAccountId || "",
    n_Usuari: generalInformation.userName || "",
    o_Clave: generalInformation.password || "",
    sucursales: normalizeBranches,
    proyectosOEventos: normalizeProyectsEvents,
    unidadesPresupuestalesDeAuxilios: normalizeAidBudgetUnits,
    tiposDeNomina: normalizePayrolls,
    pagadoresDeNomina: normalizePayrollPayments,
  };

  let confirmationType = true;
  try {
    await addLinixCompletion(completeInvitationUser, businessUnitPublicCode);
  } catch (error) {
    confirmationType = false;
    throw error;
  }

  return confirmationType;
};
