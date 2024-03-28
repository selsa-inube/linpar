import { deleteUserModal } from "../../users/config/deleteUser.config";

export interface IDeleteOptionModal {
  handleToggleModal: () => void;
  id: string;
  linuxUseCaseModalConfig: typeof deleteUserModal;
}
