import { activateUserModal } from "../../users/config/activateUser.config";

export interface IActivateOptionModal {
  activateModalConfig: typeof activateUserModal;
  active: boolean;
  handleToggleModal: () => void;
  handleActivateRole: () => void;
  id: string;
}
