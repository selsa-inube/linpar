import { FormikProps } from "formik";
import {
  IInvitation,
  IInvitationsEntry,
} from "@services/users/invitation.types";

export interface IStep {
  id: number;
  label: string;
  description: string;
}

export const titleButtonTextAssited = {
  before: "Anterior",
  after: "Siguiente",
  finish: "Enviar",
};

export interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IFormCompleteInvitation {
  generalInformation: {
    isValid: boolean;
    values: IInvitation;
  };
  branches: { isValid: boolean; values: IOptionInitialiceEntry[] };
  proyectsEvents: { isValid: boolean; values: IOptionInitialiceEntry[] };
  aidBudgetUnits: { isValid: boolean; values: IOptionInitialiceEntry[] };
  payrolls: { isValid: boolean; values: IOptionInitialiceEntry[] };
  payrollPayments: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export interface IFormCompleteInvitationRef {
  generalInformation: React.RefObject<FormikProps<IInvitationsEntry>>;
}
