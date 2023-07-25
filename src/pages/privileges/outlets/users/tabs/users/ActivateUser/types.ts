import { IGeneralInformationEntry } from "../../../types/forms.types";

interface IActivateUserModal {
  active: IGeneralInformationEntry["active"];
  user: IGeneralInformationEntry;
  handleToggleModal: () => void;
  handleActivateUser: () => void;
}

export type { IActivateUserModal };
