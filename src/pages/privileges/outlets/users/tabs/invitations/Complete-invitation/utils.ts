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

export const completeInvitationData = (
  invitationData: IFormCompleteInvitation
) => {
  const {
    generalInformation: { values: generalInformation },
    branches: { values: branches },
    projects: { values: projects },
    events: { values: events },
    aidBudgetUnits: { values: aidBudgetUnits },
    payrolls: { values: payrolls },
  } = invitationData;

  const normalizeBranches = branches
    .filter((branch) => branch.isActive === true)
    .map((branch) => ({
      id: branch.value,
    }));

  const normalizeProjects = projects
    .filter((project) => project.isActive === true)
    .map((project) => ({
      id: project.value,
    }));

  const normalizeEvents = events
    .filter((event) => event.isActive === true)
    .map((event) => ({
      id: event.value,
    }));

  const normalizeAidBudgetUnits = aidBudgetUnits
    .filter((event) => event.isActive === true)
    .map((event) => ({
      id: event.value,
    }));

  const normalizePayrolls = payrolls
    .filter((event) => event.isActive === true)
    .map((event) => ({
      id: event.value,
    }));

  const completeInvitationUser: InvitationEntry = {
    customerId: generalInformation?.customerId,
    dateEnd: generalInformation?.dateEnd,
    dateStart: generalInformation?.dateStart,
    email: generalInformation?.email,
    invitationId: generalInformation?.invitationId,
    password: generalInformation?.password,
    phoneNumber: generalInformation?.phoneNumber,
    position: generalInformation?.position,
    positionId: generalInformation?.positionId,
    requestingUser: generalInformation?.requestingUser,
    status: generalInformation?.status,
    userAccountId: generalInformation?.userAccountId,
    userIdentification: generalInformation?.userIdentification,
    userName: generalInformation?.userName,
    branches: normalizeBranches,
    projects: normalizeProjects,
    events: normalizeEvents,
    aidBudgetUnits: normalizeAidBudgetUnits,
    payrolls: normalizePayrolls,
  };

  return completeInvitationUser;
};
