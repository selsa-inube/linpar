import { EAppearance } from "@src/types/colors.types";

interface IActivation {
  title: string;
  description: (id: string) => string;
  textAction: string;
  appearance: EAppearance;
}

interface IDeactivation {
  title: string;
  description: (id: string) => string;
  textAction: string;
  appearance: EAppearance;
}

export interface IActivateModalConfig {
  activation: IActivation;
  deactivation: IDeactivation;
}

export interface IActivateOptionModal {
  active: boolean;
  handleToggleModal: () => void;
  handleActivateOptions: () => void;
  id: string;
  activateModalConfig: IActivateModalConfig;
}
