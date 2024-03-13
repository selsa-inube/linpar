import { IDataActivateOption } from ".";

export interface IActivateOptionModal<T extends IDataActivateOption> {
  active: boolean;
  handleToggleModal: () => void;
  handleActivateOptions: () => void;
  data: T;
}
