import { activateUserModal } from "../../users/config/activateUser.config";

export interface IActivateOptionModal {
  i_Activo: string;
  handleToggleModal: () => void;
  handleActivateOptions: () => void;
  k_Usuari: string;
  activateModalConfig: typeof activateUserModal;
}
