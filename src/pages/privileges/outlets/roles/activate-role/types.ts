import { activateRoleModal } from "./config/activateRole.config";

export interface IActivateOptionModal {
  activateModalConfig: typeof activateRoleModal;
  active: boolean;
  handleToggleModal: () => void;
  handleActivateRole: () => void;
  id: string;
}
