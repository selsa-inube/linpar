import { IGeneralInformationEntry } from "../../../types/forms.types";

interface IDeleteUserModal {
  user: IGeneralInformationEntry;
  handleDeleteUser: () => void;
  closeModal: () => void;
}

export type { IDeleteUserModal };
